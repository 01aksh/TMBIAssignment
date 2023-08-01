import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./css/index.css";
import "./css/custom.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
reportWebVitals();
