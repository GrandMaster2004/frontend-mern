import React from "react";

const Card = ({ oneCard }) => {
  return (
    <div>
      <img src={oneCard.image.url} alt="img" />
      {/* <div className="icon"></div> */}
      <div className="text">
        <h1>{oneCard.title}</h1>
        <p>{oneCard.description}</p>
      </div>
    </div>
  );
};

export default Card;
