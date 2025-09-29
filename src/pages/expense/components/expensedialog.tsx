// import React, { useState } from "react";

import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";
import { expenseCategories } from "../../../constant/conts";
import { usePageStore } from "../../../controller/pagecontontroller";
import "./expensedialog.css"; // ensure the path is correct

// Expense categories (like Angular version)

// interface AddExpenseDialogProps {
//   onCancel: () => void;
//   onConfirm: (form: {
//     expenseDetails: string;
//     amount: string;
//     category: string;
//     expenseDate: string;
//   }) => void;
// }

// export default function AddExpenseDialog({ onCancel, onConfirm }: AddExpenseDialogProps) {

//   // form validation like Angular Validators

//   return (
//     <div>
//       <h1>Add New Expense</h1>
//       <form className="form" onSubmit={handleSubmit}>
//         {/* Expense details */}
//         <input
//           className="form-control"
//           placeholder="Enter Expense Details"
//           type="text"
//           name="expenseDetails"
//           value={form.expenseDetails}
//           onChange={handleChange}
//         />
//         {errors.expenseDetails && (
//           <span className="text-danger">{errors.expenseDetails}</span>
//         )}

//         {/* Expense amount */}
//         <input
//           className="form-control"
//           placeholder="Enter Expense Amount"
//           type="number"
//           name="amount"
//           value={form.amount}
//           onChange={handleChange}
//         />
//         {errors.amount && <span className="text-danger">{errors.amount}</span>}

//         {/* Category dropdown */}
//         <select
//           className="form-control w-full md:w-56"
//           name="category"
//           value={form.category}
//           onChange={handleChange}
//         >
//           <option value="">Select Category</option>
//           {expenseCategories.map((cat) => (
//             <option key={cat.name} value={cat.name}>
//               {cat.name}
//             </option>
//           ))}
//         </select>
//         {errors.category && <span className="text-danger">{errors.category}</span>}

//         <div style={{ marginTop: "20px" }}>
//           <button
//             type="button"
//             onClick={onCancel}
//             style={{ marginRight: "10px" }}
//             className="btn btn-danger"
//           >
//             Cancel
//           </button>
//           <button type="submit" className="btn btn-outline-primary">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

function ExpenseDialog() {
  const { isvisible, setvisible, form, setform, errors, handleSubmit } =
    usePageStore();

  // handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setform((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          {errors.amount && (
            <span className="text-danger">{errors.amount}</span>
          )}

          <Dropdown
            value={selectedCategory}
            onChange={function (e) {
              setform((prev: any) => ({
                ...prev,
                category: e.value.name,
              }));
              return setSelectedCategory(e.value);
            }}
            options={expenseCategories}
            optionLabel="name"
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
      ;
    </>
  );
}

export default ExpenseDialog;
