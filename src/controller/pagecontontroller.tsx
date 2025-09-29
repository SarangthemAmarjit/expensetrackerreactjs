import { create } from "zustand";
import type { ExpenseModel, FormErrors } from "../model/expensemodel";
import { addExpense, deleteExpense, getExpenses } from "../services/expense";

interface PageState {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  pageIndex: number;
  setPageIndex: (index: number) => void;
  setvisible: (visible: boolean) => void;
  setform: (form: any) => void;
  form: ExpenseModel;
  seterror: (errors: FormErrors) => void;
  errors: FormErrors;
  expenses: any[];
  loading: boolean;
  isvisible: boolean;
  loadExpenses: () => Promise<void>;
  handlechange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  onconfirm: (form: ExpenseModel) => void;
  addExpense: (expense: ExpenseModel) => Promise<void>;
  updateExpense: (id: number) => Promise<void>;
  removeExpense: (id: number) => Promise<void>;
  validate: () => FormErrors;
}

export const usePageStore = create<PageState>((set, get) => ({
  selectedCategory: "",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  pageIndex: 0,
  expenses: [],
  loading: false,
  isvisible: false,
  errors: {},
  form: {
    expenseDetails: "",
    amount: 0,
    category: "",
    expenseDate: new Date().toISOString(), // default today
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
  // Add a method to modify the expenses list
  updateExpense: async (id: number) => { },
  addExpense: async (expense: ExpenseModel) => { },

  removeExpense: async (id: number) => {
    try {
      await deleteExpense(id);
      await get().loadExpenses(); // refresh list after delete
    } catch (err) {
      console.error("Error deleting expense:", err);
    }
  },

  handleSubmit: (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = get().validate();
    if (Object.keys(validationErrors).length > 0) {
      get().seterror(validationErrors);
    } else {
      console.log("Form is valid, submitting:", get().form);
      get().onconfirm(get().form); // send data to parent
    }
  },

  onconfirm: (form: ExpenseModel) => {
    addExpense(form).then((response) => {
      console.log("Expense added successfully:", response);
      get().loadExpenses();
      get().setvisible(false);
    });
    console.log("Form submitted:", form);
  },

  handlechange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    set({form: { ...get().form, [name]: value } });
  },

  validate: () => {
    let newErrors: FormErrors = {};
    if (!get().form.expenseDetails.trim())
      newErrors.expenseDetails = "Details required";
    if (!get().form.amount || get().form.amount <= 0)
      newErrors.amount = "Amount must be greater than 0";
    // if (!selectedCategory) newErrors.category = "Category required";
    return newErrors;
  },

  seterror: (errors: FormErrors) => set({ errors: errors }),
}));
