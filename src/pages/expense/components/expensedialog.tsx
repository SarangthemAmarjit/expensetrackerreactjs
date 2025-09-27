// import React, { useState } from "react";

import { Dialog } from "primereact/dialog";

// // Expense categories (like Angular version)
// const expenseCategories = [
//   { name: "Electric Bill" },
//   { name: "Water Bill" },
//   { name: "Mobile Recharge" },
//   { name: "Grocery Items" },
//   { name: "Clothes" },
// ];

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
//   const [form, setForm] = useState({
//     expenseDetails: "",
//     amount: "",
//     category: "",
//     expenseDate: new Date().toISOString(), // default today
//   });

//   const [errors, setErrors] = useState({});

//   // handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // form validation like Angular Validators
//   const validate = () => {
//     let newErrors = {};
//     if (!form.expenseDetails.trim()) newErrors.expenseDetails = "Details required";
//     if (!form.amount || form.amount <= 0) newErrors.amount = "Amount must be greater than 0";
//     if (!form.category) newErrors.category = "Category required";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       onConfirm(form); // send data to parent
//     }
//   };

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

type Props = {
  isvis: boolean;
  setVisible: (value: boolean) => void;
};
function ExpenseDialog({ isvis, setVisible }: Props) {
  return (
    <>
      <Dialog
        draggable={false}
        header="Add New Expense"
        visible={isvis}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!isvis) return;
          setVisible(false);
        }}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
      ;
    </>
  );
}

export default ExpenseDialog;
