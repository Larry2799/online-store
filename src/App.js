import React from "react";
import cars from "./constants/carsInfo";
import CardList from "./components/CardList/CardList";


function App() {
  return (
        <CardList items={cars}/>
  )
}

export default App;
