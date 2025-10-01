// import React, { useState } from "react";

import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";

import { expenseCategories } from "../../../constant/conts";
import { usePageStore } from "../../../controller/pagecontontroller";
import "./expensedialog.css"; // ensure the path is correct

function ExpenseDialog() {
  const {
    handlechange,
    selectedCategory,
    setSelectedCategory,
    isvisible,
    setvisible,
    form,
    setform,
    errors,
    handleSubmit,
  } = usePageStore();

  return (
    <>
      <Dialog
        draggable={false}
        header="Add New Expense"
        visible={isvisible}
        style={{ width: "30vw" }}
        onHide={() => {
          if (!isvisible) return;
          setvisible(false);
        }}
      >
        <form className="form">
          {/* Expense details */}
          <input
            className="form-control"
            placeholder="Enter Expense Details"
            type="text"
            name="expenseDetails"
            value={form.expenseDetails}
            onChange={handlechange}
          />
          {errors.expenseDetails && (
            <span className="text-danger">{errors.expenseDetails}</span>
          )}

          <input
            className="form-control"
            placeholder="Enter Expense Amount"
            type="number"
            name="amount"
            value={form.amount}
            onChange={handlechange}
          />
          {errors.amount && (
            <span className="text-danger">{errors.amount}</span>
          )}
          <Dropdown
            name="category"
            value={form.category}
            onChange={(e) => {
              handlechange({
                target: {
                  name: "category",
                  value: e.value, // Direct string value
                },
              });
            }}
            options={expenseCategories}
            placeholder="Select a Category"
            className="w-full md:w-14rem"
          />
          {errors.category && (
            <span className="text-danger">{errors.category}</span>
          )}

          <div style={{ marginTop: "20px" }}>
            <button
              type="button"
              onClick={() => setvisible(false)}
              style={{ marginRight: "10px" }}
              className="btn btn-danger"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-outline-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </Dialog>
    </>
  );
}

export default ExpenseDialog;
