// import React, { useState } from "react";

import { Dialog } from "primereact/dialog";

import { usePageStore } from "../../../controller/pagecontontroller";
import "./expensedialog.css"; // ensure the path is correct

function DeleteDialog() {
  const { removeExpense, isvisiblefordelete, setvisiblefordelete } =
    usePageStore();

  return (
    <>
      <Dialog
        draggable={false}
        header="Confirm Delete Expense"
        visible={isvisiblefordelete}
        style={{ width: "25vw" }}
        onHide={() => {
          if (!isvisiblefordelete) return;
          setvisiblefordelete(false);
        }}
      >
        <div className="p-3">
          <p>Are you sure you want to delete this expense?</p>

          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <button
              type="button"
              onClick={() => setvisiblefordelete(false)}
              style={{ marginRight: "10px" }}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => removeExpense()} // call your delete logic here
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
