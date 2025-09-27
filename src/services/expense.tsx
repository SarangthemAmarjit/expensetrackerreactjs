import axios from "axios";
import type { ExpenseModel } from "../model/expensemodel";

// Replace with your API endpoint
// const apiUrl = "http://192.168.137.1:8080/api/Expenses";
const apiUrl = "http://10.10.1.214:8081/api/Expenses";

// GET all expenses
export const getExpenses = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};

// GET single expense by id
export const getExpenseById = async (id: number) => {
  const response = await axios.get(`${apiUrl}/${id}`);
  return response.data;
};

// POST (Add new expense)
export const addExpense = async (expense: ExpenseModel) => {
  const response = await axios.post(apiUrl, expense);
  return response.data;
};

// PUT (Update existing expense)
export const updateExpense = async (id: number, expense: ExpenseModel) => {
  const response = await axios.put(`${apiUrl}/${id}`, expense);
  return response.data;
};

// DELETE
export const deleteExpense = async (id: number) => {
  await axios.delete(`${apiUrl}/${id}`);
  return true;
};
