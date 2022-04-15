import React from "react";
import './BreakFood.css'

const BreakFood = ({ breakfast }) => {
  const { name, img, price, body } = breakfast;
  return (
    <div className="col-lg-4">
      <div className="card border-0">
        <img src={img} className="rounded-circle p-5" alt="" />
        <div className="card-body text-center p-0 pb-3">
            <h2 className="card-title">{name}</h2>
            <p>{body}</p>
            <h4 className="card-text">Price: ${price}</h4>
        </div>
      </div>
    </div>
  );
};

export default BreakFood;
