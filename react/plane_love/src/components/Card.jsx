import React, { useState } from "react";

const Card = ({ id, image, info, price, name, removetour }) => {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}...`;
  function readmoreHandler() {
    setReadmore(!readmore);
  }
  return (
    <div className="card">
      <img src={image} className="image" alt="img"></img>

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? "read less" : "readmore"}
          </span>
        </div>
      </div>
      <button onClick={() => removetour(id)}>Not Interested</button>
    </div>
  );
};

export default Card;
