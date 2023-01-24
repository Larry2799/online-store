import React from "react";
import cars from "./constants/car/carsInfo";
import CardList from "./components/CardList/CardList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <CardList cars={cars} />
      <Footer />
    </div>
  );
}
export default App;
