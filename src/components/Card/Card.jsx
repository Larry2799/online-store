import React from "react";
import {
  stringifyDescription,
  buildSecondaryPrice,
} from "./services/summaryBuilder";
import { ICONS } from "../../constants/icons";
import { CURRENCY } from "../../constants/currency";
import * as S from "./Card.style";

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
  const secondaryCurrency = CURRENCY.BYN;
  const secondaryPrice = buildSecondaryPrice(price.value, secondaryCurrency);

  return (
    <S.CardContainer>
      <S.CardImage>
        <img src={image} alt={`${mark} ${model}`} />
      </S.CardImage>
      <S.GlobalDescription>
        <S.CardSummary>
          <S.MainDescription>
            {`${mark} ${model} ${generation}`}
          </S.MainDescription>
          <S.CardPrice>
            <S.MainPrice>{`${price.value}${price.currency}`}</S.MainPrice>
            <S.SecondPrice>{secondaryPrice}</S.SecondPrice>
          </S.CardPrice>
          <S.CardDescription>{description}</S.CardDescription>
        </S.CardSummary>
        <S.SaveImage src={ICONS.BOOKMARK} alt="Bookmark icon" />
      </S.GlobalDescription>
    </S.CardContainer>
  );
};

export default Card;
