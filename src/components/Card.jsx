import React from 'react';
import '../css/components/Card.css';

const Card = ({ handleClick, title, price, image }) => {
  return (
    <div onClick={handleClick} className="Card">
      <img src={image} alt={title}/>
      <h2>{title}</h2>
      <p>{`$${price}` || 'Omitted'}</p>
      <button onClick={handleClick}>Purchase</button>
    </div>
  );
};

export default Card;