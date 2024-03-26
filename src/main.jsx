import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/w3schools.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div style={{backgroundColor: "black"}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);
