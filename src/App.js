import React from "react";
import "./App.css";
import Router from "./components/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="center-container">
        <Router />
      </div>
    </BrowserRouter>
  );
}
export default App;
