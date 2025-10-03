import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dashboardsection.css"; // make sure the path is correct

function DashboardSection() {
  const dashboarditems = [
    { label: "Total Income", value: 5000, icon: "src/assets/income.svg" },
    { label: "Total Expense", value: 2000, icon: "src/assets/expense.svg" },
    { label: "Net Balance", value: 1500, icon: "src/assets/netbalance.svg" },
    { label: "Saving Percentage", value: 1500, icon: "src/assets/saving.svg" },
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
              <div className="card d-flex w-100 flex-row align-items-xl-center justify-content-between text-start p-3">
                <div>
                  <span>{item.label}</span>
                  <h4>${item.value}</h4>
                </div>

                <div>
                  <img
                    src={item.icon}
                    alt="icon"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="chartcontainer d-flex w-100 gap-10px">
          <div className="card" style={{ flex: 1 }}>
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>

          <div className="card" style={{ flex: 2 }}>
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardSection;
