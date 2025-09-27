import { useState } from "react";

import "./App.css";
import LandingPage from "./pages/landing/landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LandingPage />
      {/* <div>
        <i className="fa-house"></i>
      </div>
      <div className="card">
        <Button
          icon={<IoAdd style={{ fontSize: "20px", color: "black" }} />}
          className="btn btn-outline-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          Add
        </Button>

        <h3>count is {count}</h3>

        <Button
          icon={<IoRemove style={{ fontSize: "20px", color: "black" }} />}
          className="btn btn-outline-primary"
          onClick={() =>
            setCount(function (count) {
              if (count === 0) {
                alert("Count is already 0");
                return count;
              } else {
                return count - 1;
              }
            })
          }
        >
          Substract
        </Button>
      </div> */}
    </>
  );
}

export default App;
