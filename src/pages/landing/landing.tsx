import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./landing.css"; // make sure the path is correct

// import the specific icons you need
import {
  faChartBar,
  faCog,
  faExchangeAlt,
  faHome,
  faMoneyBill,
  faSignOutAlt,
  faTags,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import DashboardSection from "../dashboardsection/dashboardsection";
import ExpenseSection from "../expense/expense";

function LandingPage() {
  const [pageIndex, setPageIndex] = useState(0);

  const menuItems = [
    { label: "Dashboard", icon: faHome },
    { label: "Expense", icon: faWallet },
    { label: "Transactions", icon: faExchangeAlt },
    { label: "Category", icon: faTags },
    { label: "Reports", icon: faChartBar },
    { label: "Budget", icon: faMoneyBill },
    { label: "Settings", icon: faCog },
    { label: "Logout", icon: faSignOutAlt },
  ];

  const updatePage = (i: number) => {
    if (i === 7) {
      if (window.confirm("Are you sure you want to logout?")) {
        console.log("User logged out");
      }
    } else {
      setPageIndex(i);
    }
  };

  return (
    <div className="container d-flex">
      <div className="container1">
        <div className="innercontainer">
          <label>EXPENSE TRACKER</label>

          <div className="menulist">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className={`menu-item ${pageIndex === i ? "active" : ""}`}
                onClick={() => updatePage(i)}
              >
                <FontAwesomeIcon
                  className={`iconclassName ${pageIndex === i ? "active" : ""}`}
                  icon={item.icon}
                />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mainpage">
          {pageIndex === 0 && <DashboardSection />}
          {pageIndex === 1 && <ExpenseSection />}
          {pageIndex === 2 && <TransactionSection />}
          {pageIndex === 3 && <CategorySection />}
          {pageIndex === 4 && <ReportSection />}
          {pageIndex === 5 && <BudgetSection />}
          {pageIndex === 6 && <SettingSection />}
        </div>
      </div>
    </div>
  );
}

// // Example dummy components (replace with your actual ones)
// const DashboardSection = () => <div>Dashboard Page</div>;
const Expense = () => <div>Expense Page</div>;
const TransactionSection = () => <div>Transaction Page</div>;
const CategorySection = () => <div>Category Page</div>;
const ReportSection = () => <div>Report Page</div>;
const BudgetSection = () => <div>Budget Page</div>;
const SettingSection = () => <div>Setting Page</div>;

export default LandingPage;
