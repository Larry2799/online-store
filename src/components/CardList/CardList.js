import React from 'react';
import Card from "../Card/Card";

const CardList = ({items}) => {
    return (
        <div className="cardList-container">
            {items.map(item =>
            <Card {...item}></Card>)}
        </div>
    );
};

export default CardList;