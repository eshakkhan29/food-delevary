import React, { useEffect, useState } from "react";
import DinnerFood from "./DinnerFood/DinnerFood";

const Dinner = () => {
  const [dinner, setDinner] = useState([]);
  useEffect(() => {
    fetch("dinner.json")
      .then((res) => res.json())
      .then((data) => setDinner(data));
  }, []);
  return (
    <div className="container">
      <div className="row mt-5 g-5">
        {dinner.map((dinner) => (
          <DinnerFood key={dinner.id} dinner={dinner}></DinnerFood>
        ))}
      </div>
    </div>
  );
};

export default Dinner;
