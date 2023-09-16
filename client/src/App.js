import React, { Component, useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";

import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "./App.css";
 
class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    )
  }
}

export default App