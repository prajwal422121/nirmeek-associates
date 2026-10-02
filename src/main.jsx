import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AppRouter } from "./Approuter.jsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
