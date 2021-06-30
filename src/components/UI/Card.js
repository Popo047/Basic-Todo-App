import React from "react";
import "./Card.css";

function Card({ title, body }) {
  console.log(body);

  return (
    <div className="card-container container">
      <div className="image-container">
        {/* <img
          src="https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
        /> */}
      </div>
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
