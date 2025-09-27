import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dashboardsection.css"; // make sure the path is correct

function DashboardSection() {
  const dashboarditems = [
    { label: "Total Income", value: 5000 },
    { label: "Total Expense", value: 2000 },
    { label: "Total Savings", value: 3000 },
    { label: "Budget Left", value: 1500 },
  ];

  return (
    <div>
      <div className="dashcontainer" style={{ marginTop: "15px" }}>
        <h4>Dashboard</h4>
        <FontAwesomeIcon className="big-icon" icon={faCircleUser} />
      </div>

      <div className="dashcontainer2">
        <div className="row">
          {dashboarditems.map((item, idx) => (
            <div className="col-6 col-md-4 col-lg-3" key={idx}>
              <div className="card text-start p-3">
                <span>{item.label}</span>
                <h4>${item.value}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardSection;
