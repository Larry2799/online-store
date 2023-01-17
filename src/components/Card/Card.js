import React from "react";
import "./Card.css";
import { buildDescription } from "./summaryBuilder";

const Card = ({
  mark,
  model,
  generation,
  year,
  transmission,
  engine,
  mileage,
  image,
  price,
}) => {
  const description = buildDescription({ year, transmission, engine, mileage });

  return (
    <div className="card__container">
      <div className="card__image">
        <img src={image} alt="#" />
      </div>
      <div className="card__summary">
        <h3 className="main__description">
          {mark + " " + model + " " + generation}
        </h3>
        <div className="card__price">{price.value + " " + price.currency}</div>
        <div className="card__description">{description}</div>
      </div>
    </div>
  );
};

export default Card;
