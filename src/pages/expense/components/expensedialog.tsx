// import React, { useState } from "react";

import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";

import { expenseCategories } from "../../../constant/conts";
import { expensecontroller } from "../../../controller/expensecontontroller";
import "./expensedialog.css"; // ensure the path is correct

function ExpenseDialog() {
  const expensecon = expensecontroller();

  return (
    <>
      <Dialog
        draggable={false}
        header={expensecon.iseditexpense ? "Update Expense" : "Add New Expense"}
        visible={expensecon.isvisible}
        style={{ width: "30vw" }}
        onHide={() => {
          if (!expensecon.isvisible) return;
          expensecon.setvisible(false);
        }}
      >
        <form className="form">
          {/* Expense details */}
          <input
            className="form-control"
            placeholder="Enter Expense Details"
            type="text"
            name="expenseDetails"
            value={expensecon.form.expenseDetails}
            onChange={expensecon.handlechange}
          />
          {expensecon.errors.expenseDetails && (
            <span className="text-danger">
              {expensecon.errors.expenseDetails}
            </span>
          )}

          <input
            className="form-control"
            placeholder="Enter Expense Amount"
            type="number"
            name="amount"
            value={expensecon.form.amount}
            onChange={expensecon.handlechange}
          />
          {expensecon.errors.amount && (
            <span className="text-danger">{expensecon.errors.amount}</span>
          )}
          <Dropdown
            name="category"
            value={expensecon.form.category}
            onChange={expensecon.handlechange}
            options={expenseCategories}
            placeholder="Select a Category"
            className="w-full md:w-14rem"
          />
          {expensecon.errors.category && (
            <span className="text-danger">{expensecon.errors.category}</span>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <button
              type="button"
              onClick={() => expensecon.setvisible(false)}
              style={{ marginRight: "10px" }}
              className="btn btn-danger"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={expensecon.handleSubmit}
              className="btn btn-outline-primary"
            >
              {expensecon.iseditexpense ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </Dialog>
    </>
  );
}

export default ExpenseDialog;
