import React from "react";
import Card from "../Card/Card";
import * as S from "./CardList..style";

const CardList = ({ cars }) => {
  return (
    <S.CardListContainer>
      <S.CardListItems>
        {cars.map((car, index) => (
          <Card key={car.id} {...car} index={index}></Card>
        ))}
      </S.CardListItems>
    </S.CardListContainer>
  );
};

export default CardList;
