import React, { useEffect, useState } from 'react';
import LunchFood from './LunchFood/LunchFood';

const Lunch = () => {
    const [lunch, setLunch] = useState([]);
  useEffect(() => {
    fetch("lunch.json")
      .then((res) => res.json())
      .then((data) => setLunch(data));
  }, []);
  return (
    <div className="container">
      <div className="row mt-5 g-5">
        {
            lunch.map(lunch=><LunchFood key={lunch.id} lunch={lunch}></LunchFood>)
        }
      </div>
    </div>
  );
};

export default Lunch;