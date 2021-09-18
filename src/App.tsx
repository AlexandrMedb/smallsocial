import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";

import { DevNavbar } from "./components/DevNavbar";
import "./App.css";

function App() {
  const isAuthenticated = true;
  const routes = useRoutes(isAuthenticated);
  return (
    <div>
      <Router>
        <DevNavbar />
        <div className="container">{routes}</div>
      </Router>
    </div>
  );
}

export default App;
