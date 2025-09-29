export interface ExpenseModel {
  id?: number;
  expenseDetails: string;
  category: string;
  amount: number;
  expenseDate: string; // or Date if you will parse it into Date object
}

export type FormErrors = {
  expenseDetails?: string;
  amount?: string;
  category?: string;
  expenseDate?: string;
};
