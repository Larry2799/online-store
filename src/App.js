import React from "react";
import "./App.css";
import Router from "./components/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Router />
      </div>
    </BrowserRouter>
  );
}
export default App;
