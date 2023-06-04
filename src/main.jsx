import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/base.scss";
import TmzProvider from "./store/TmzProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <TmzProvider>
    <App />
  </TmzProvider>
  // </React.StrictMode>
);
