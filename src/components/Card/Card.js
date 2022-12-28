import React from 'react';
import "./Card.css"
const Card = ({id,title,description,date,name,age}) => {
    return (
        <div className="post__container">
            <div className="post">
                <div className="post-content">
                    <strong>{id}</strong>
                    <strong>{title}</strong>
                    <div>
                        {description}
                    </div>
                    <div>
                        {date}
                    </div>
                    <div>
                        {name}
                    </div>
                    <div>
                        {age}
                    </div>
                </div>
                <div className="post__buttons">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default Card;