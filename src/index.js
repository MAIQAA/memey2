import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
