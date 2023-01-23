import React from "react";
import "./Card.css";
import { buildDescription } from "./summaryBuilder";
import { usdTo } from "../../utils/moneyConverter";
import { ICONS } from "../../constants/icons";
import { CURRENCY } from "../../constants/currency";

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
  const secondaryCurrency = CURRENCY.EUR;

  return (
    <div className="card__container">
      <div className="card__image">
        <img src={image} alt="#" />
      </div>
      <div className="description">
        <div className="card__summary">
          <h3 className="main__description">
            {mark + " " + model + " " + generation}
          </h3>
          <div className="card__price">
            <div className="usd__price">
              {price.value + " " + price.currency}
            </div>
            <div className="byn__price">
              {"≈ " +
                "  " +
                usdTo(secondaryCurrency, price.value) +
                "  " +
                secondaryCurrency}
            </div>
          </div>
          <div className="card__description">{description}</div>
        </div>
        <div className="save__btn">
          <img className="save__img" src={ICONS.BOOKMARK} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Card;
