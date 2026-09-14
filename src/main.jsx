import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Table from "./pages/Table.jsx";
import Divisions from "./pages/Divisions.jsx";
import Division from "./pages/Division.jsx";
import Schedule from "./pages/Schedule.jsx";
import Scores from "./pages/Scores.jsx";
import Schools from "./pages/Schools.jsx";
import Rules from "./pages/Rules.jsx";
import Guides from "./pages/Guides.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="table" element={<Table />} />
          <Route path="divisions" element={<Divisions />} />
          <Route path="divisions/:slug" element={<Division />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="scores" element={<Scores />} />
          <Route path="schools" element={<Schools />} />
          <Route path="rules" element={<Rules />} />
          <Route path="guides" element={<Guides />} />
          <Route path="contact" element={<Contact />} />
          <Route path="standings" element={<Navigate to="/table" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
