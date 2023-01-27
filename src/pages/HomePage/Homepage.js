import cars from "../../constants/car/carsInfo";
import CardList from "../../components/CardList/CardList";
import React from "react";

export const Homepage = () => {
  return <CardList cars={cars} />;
};
