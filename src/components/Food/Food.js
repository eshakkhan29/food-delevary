import "./Food.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Breakfast from "./Breakfast/Breakfast";
import Lunch from "./Lunch/Lunch";
import Dinner from "./Dinner/Dinner";

const Food = () => {
  
  return (
    <div className="text-center mt-4">
      <NavLink 
        className={({ isActive }) =>
          isActive ? "food-navLink-active" : "food-navLink"
        }
        to="/breakfast"
      >
        Breakfast
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "food-navLink-active" : "food-navLink"
        }
        to="/lunch"
      >
        Lunch
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "food-navLink-active" : "food-navLink"
        }
        to="/dinner"
      >
        Dinner
      </NavLink>
      <Routes>
        <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
        <Route path="/" element={<Breakfast></Breakfast>}></Route>
        <Route path="/lunch" element={<Lunch></Lunch>}></Route>
        <Route path="/dinner" element={<Dinner></Dinner>}></Route>
      </Routes>
      <button className="mt-5 btn btn-secondary px-5 py-2 fs-4">Check Your Food</button>
    </div>
  );
};

export default Food;
