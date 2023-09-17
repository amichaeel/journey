import React, { Component } from "react";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Navigate, useNavigate } from "react-router-dom";
import {useAuth } from "../../client/src/context/AuthContext"

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import "./App.css";
class App extends Component {
  if (user) {
    Navigate("/dashboard")
  }
  render() {
    return (
      <div className="app-container">
        <TopNavBar />
        <div className="app-body">
          <div>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
