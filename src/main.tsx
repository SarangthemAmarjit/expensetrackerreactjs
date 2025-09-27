import "@fortawesome/fontawesome-free"; // <-- important (runs once globally)

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import bootstrap css
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css"; // Icons
import "primereact/resources/primereact.min.css"; // Core CSS
import "primereact/resources/themes/lara-light-blue/theme.css"; // Theme

createRoot(document.getElementById("root")!).render(<App />);
