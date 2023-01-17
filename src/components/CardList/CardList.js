import React, { useState } from "react";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = ({ cars }) => {
  return (
    <div className="cardList__container">
      <div className="card__items">
        {cars.map((car, index) => (
          <Card key={car.id} {...car} index={index}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
