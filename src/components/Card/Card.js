import React from "react";
import "./Card.css";
import { stringifyDescription, buildSecondaryPrice } from "./summaryBuilder";
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
  const description = stringifyDescription({
    year,
    transmission,
    engine,
    mileage,
  });
  const secondaryCurrency = CURRENCY.EUR;
  const secondaryPrice = buildSecondaryPrice(price.value, secondaryCurrency);

  return (
    <div className="card__container">
      <div className="card__image">
        <img src={image} alt={`${mark} ${model}`} />
      </div>
      <div className="description">
        <div className="card__summary">
          <h3 className="main__description">
            {`${mark} ${model} ${generation}`}
          </h3>
          <div className="card__price">
            <div className="usd__price">{`${price.value}${price.currency}`}</div>
            <div className="second__price">{secondaryPrice}</div>
          </div>
          <div className="card__description">{description}</div>
        </div>
        <div className="save__btn">
          <img className="save__img" src={ICONS.BOOKMARK} alt="Bookmark icon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
