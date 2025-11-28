import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Worky from "./pages/Worky";
import "./App.css";

function Layout() {
  return (
    <div className="outer">
      <div className="frame">
        <header className="header">
          <div className="header-left">
            <span className="brand-name">Camila González</span>
          </div>
          <nav className="header-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/worky"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
            >
              Worky
            </NavLink>
          </nav>
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/worky" element={<Worky />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
