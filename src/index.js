import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Actions from "./pages/Actions";
import Catalog from "./pages/Catalog";
import Delivery from "./pages/Delivery";
import About from "./pages/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/actions" />} />
        <Route path="actions" element={<Actions />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </Router>
);