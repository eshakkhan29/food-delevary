import "./Food.css";
import { NavLink } from "react-router-dom";

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
    </div>
  );
};

export default Food;
