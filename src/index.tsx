import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import App from "./App";
import "./locales/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </React.StrictMode>
);
