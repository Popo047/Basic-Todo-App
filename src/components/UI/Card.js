import React from "react";
import "./Card.css";

function Card({ title, body }) {
  console.log(body);

  return (
    <div className="card-container container">
      <div className="image-container"></div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
