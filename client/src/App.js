import React, { Component, useState, useEffect } from "react";
import Home from "./pages/Home/Home";

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "./App.css";
 
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/index" component={Home} />
      </Router>
    )
  }
}

export default App