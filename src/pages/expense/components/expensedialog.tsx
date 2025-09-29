// import React, { useState } from "react";

import { Dialog } from "primereact/dialog";
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";
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

  const expenseCategories = [
    { name: "Electric Bill" },
    { name: "Water Bill" },
    { name: "Mobile Recharge" },
    { name: "Grocery Items" },
    { name: "Clothes" },
  ];

  const [form, setForm] = useState({
    expenseDetails: "",
    amount: "",
    category: "",
    expenseDate: new Date().toISOString(), // default today
  });



  // handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
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
        visible={isvis}
        style={{ width: "30vw" }}
        onHide={() => {
          if (!isvis) return;
          setVisible(false);
        }}
      >
        <form className="form" >
          {/* Expense details */}
          <input
            className="form-control"
            placeholder="Enter Expense Details"
            type="text"
            name="expenseDetails"
            value={form.expenseDetails}
            onChange={handleChange}
          />
          {/* {errors.expenseDetails && (
          <span className="text-danger">{errors.expenseDetails}</span>
        )} */}

          {/* Expense amount */}
          <input
            className="form-control"
            placeholder="Enter Expense Amount"
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
          />







          <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={expenseCategories} optionLabel="name"
            placeholder="Select a Category" className="w-full md:w-14rem" />








          <div style={{ marginTop: "20px" }}>
            <button
              type="button"
              onClick={() => setVisible(false)}
              style={{ marginRight: "10px" }}
              className="btn btn-danger"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-outline-primary">
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
