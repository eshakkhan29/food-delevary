import React, { useEffect, useState } from "react";
import BreakFood from "./BreakFood/BreakFood";

const Breakfast = () => {
  const [breakfast, setBreakfast] = useState([]);
  useEffect(() => {
    fetch("breackfirst.json")
      .then((res) => res.json())
      .then((data) => setBreakfast(data));
  }, []);
  return (
    <div className="container">
      <div className="row mt-5 g-5">
        {breakfast.map((breakfast) => (
          <BreakFood key={breakfast.id} breakfast={breakfast}></BreakFood>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
