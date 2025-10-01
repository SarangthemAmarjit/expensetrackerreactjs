import { useEffect } from "react";
import { expensecontroller } from "../../controller/pagecontontroller";
import DeleteDialog from "./components/deletedialog";
import ExpenseDialog from "./components/expensedialog";
import "./expense.css"; // ensure the path is correct
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

function ExpenseSection() {
const expensecon = expensecontroller();

  // fetch all expenses on component mount
  useEffect(() => {
   expensecon.loadExpenses();
 
  }, []);

  return (
    <>
      <div className="expensecontainer1 d-flex justify-content-between align-items-center mb-3">
        <h4>Expenses</h4>
        <button
          className="btn btn-outline-primary"
          onClick={() => expensecon.setvisible(true)}
        >
          
          {/* <FaPlus /> */} Add Expense
        </button>
      </div>
      <DeleteDialog />
      <ExpenseDialog />
      {expensecon.loading ? (
        <div className="alert alert-info" role="alert">
          Loading expenses, please wait...
        </div>
      )
      :expensecon.isservererror ? (
        <div className="alert alert-danger" role="alert">
          Server error occurred. Please try again later.
        </div>
      )
      
      
      : expensecon.expenses.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          No expenses found. Please add some expenses.
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Details</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Expense Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expensecon.expenses.map((item, i) => (
              <tr key={item.id || i}>
                <td>{i + 1}</td>
                <td>{item.expenseDetails}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td>{item.expenseDate}</td>
                <td>
                  <button
                    className="btn btn-outline-primary btn-sm me-2"
                    onClick={() => alert("Edit expense coming soon")}
                  >
                    {/* <FaEdit /> */} Edit
                  </button>

                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => expensecon.setvisiblefordelete(true, item.id)} // open delete dialog)}
                  >
                    {/* <FaTrash /> */} Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ExpenseSection;
