import React from "react";

const Card = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>
        By<span>{props.post.author}</span> on <span>{props.post.category}</span>
      </p>
      <p>Posted On {props.post.date}</p>
      <p>Posted On {props.post.content}</p>
      <div>
        {props.post.tags.map((tag) => {
          return <span>`#${tag}`</span>;
        })}
      </div>
    </div>
  );
};

export default Card;
