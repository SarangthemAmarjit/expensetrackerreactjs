import { create } from "zustand";
import type { ExpenseModel, FormErrors } from "../model/expensemodel";
import { addExpense, deleteExpense, getExpenses } from "../services/expense";

interface PageState {
  selectedexpenseId?: number;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  pageIndex: number;
  setPageIndex: (index: number) => void;
  setvisible: (visible: boolean) => void;
  setvisiblefordelete: (visible: boolean, id?: number) => void;
  setform: (form: any) => void;
  form: ExpenseModel;
  seterror: (errors: FormErrors) => void;
  errors: FormErrors;
  expenses: any[];
  loading: boolean;
  isvisible: boolean;
  isvisiblefordelete: boolean;
  loadExpenses: () => Promise<void>;
  handlechange: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | { target: { name: string; value: any } }
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  onconfirm: (form: ExpenseModel) => void;
  updateExpense: (id: number) => Promise<void>;
  removeExpense: () => Promise<void>;
  validate: () => FormErrors;
}

export const usePageStore = create<PageState>((set, get) => ({
  selectedCategory: "",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  pageIndex: 0,
  expenses: [],
  loading: false,
  isvisible: false,
  isvisiblefordelete: false,

  setvisiblefordelete: (visible: boolean, id?: number) => {
    set({
      isvisiblefordelete: visible,
      selectedexpenseId: id,
    });
  },

  errors: {},
  form: {
    expenseDetails: "",
    amount: 0,
    category: "",
    expenseDate: new Date().toISOString(),
  },
  setform: (form) => set({ form: form }),

  setPageIndex: (index) => set({ pageIndex: index }),
  setvisible: (visible) => set({ isvisible: visible }),

  loadExpenses: async () => {
    set({ loading: true });
    try {
      const data = await getExpenses();
      set({ expenses: data });
    } catch (err) {
      console.error("Error fetching expenses:", err);
    } finally {
      set({ loading: false });
    }
  },

  updateExpense: async (id: number) => {},

  removeExpense: async () => {
    try {
      await deleteExpense(get().selectedexpenseId!);
      await get().loadExpenses();
      set({ isvisiblefordelete: false });
    } catch (err) {
      console.error("Error deleting expense:", err);
    }
  },

  handleSubmit: (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = get().validate();
    if (Object.keys(validationErrors).length > 0) {
      set({ errors: validationErrors }); // FIXED: Using set directly
    } else {
      console.log("Form is valid, submitting:", get().form);
      get().onconfirm(get().form);
    }
  },

  onconfirm: (form: ExpenseModel) => {
    addExpense(form)
      .then((response) => {
        console.log("Expense added successfully:", response);
        get().loadExpenses();
        set({
          isvisible: false,
          errors: {}, // Clear errors on success
          form: {
            expenseDetails: "",
            amount: 0,
            category: "",
            expenseDate: new Date().toISOString(),
          },
        });
      })
      .catch((error) => {
        console.error("Error adding expense:", error);
      });
  },

  // Then update the implementation
  handlechange: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | { target: { name: string; value: any } }
  ) => {
    const { name, value } = e.target;
    set((state) => ({
      form: { ...state.form, [name]: value },
      errors: { ...state.errors, [name]: "" },
    }));

    console.log("Changed:", get().form);
  },

  validate: () => {
    let newErrors: FormErrors = {};
    const { form } = get();

    if (!form.expenseDetails?.trim()) {
      newErrors.expenseDetails = "Details required";
    }

    const amount =
      typeof form.amount === "string" ? parseFloat(form.amount) : form.amount;
    if (!form.amount || amount <= 0 || isNaN(amount)) {
      newErrors.amount = "Amount must be greater than 0";
    }

    if (!form.category?.trim()) {
      newErrors.category = "Category required";
    }

    return newErrors;
  },

  seterror: (errors: FormErrors) => set({ errors: errors }),
}));
