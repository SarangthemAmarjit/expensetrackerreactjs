// import React, { useState } from "react";

import { Dialog } from "primereact/dialog";

import { expensecontroller } from "../../../controller/pagecontontroller";
import "./expensedialog.css"; // ensure the path is correct

function DeleteDialog() {
const expensecon = expensecontroller();

  return (
    <>
      <Dialog
        draggable={false}
        header="Confirm Delete Expense"
        visible={expensecon.isvisiblefordelete}
        style={{ width: "25vw" }}
        onHide={() => {
          if (!expensecon.isvisiblefordelete) return;
          expensecon.setvisiblefordelete(false);
        }}
      >
        <div className="p-3">
          <p>Are you sure you want to delete this expense?</p>

          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <button
              type="button"
              onClick={() => expensecon.setvisiblefordelete(false)}
              style={{ marginRight: "10px" }}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => expensecon.removeExpense()} // call your delete logic here
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default DeleteDialog;
