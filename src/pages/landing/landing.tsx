import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { landingcontroller } from "../../controller/landingcontroller";

function LandingPage() {
const landingcon = landingcontroller();

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
      landingcon.setPageIndex(i);
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
                className={`menu-item ${landingcon.pageIndex === i ? "active" : ""}`}
                onClick={() => updatePage(i)}
              >
                <FontAwesomeIcon
                  className={`iconclassName ${landingcon.pageIndex === i ? "active" : ""}`}
                  icon={item.icon}
                />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mainpage">
          {landingcon.pageIndex === 0 && <DashboardSection />}
          {landingcon.pageIndex === 1 && <ExpenseSection />}
          {landingcon.pageIndex === 2 && <TransactionSection />}
          {landingcon.pageIndex === 3 && <CategorySection />}
          {landingcon.pageIndex === 4 && <ReportSection />}
          {landingcon.pageIndex === 5 && <BudgetSection />}
          {landingcon.pageIndex === 6 && <SettingSection />}
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
