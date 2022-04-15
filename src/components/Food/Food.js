import "./Food.css";
import { NavLink} from "react-router-dom";

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
      <button className="mt-5 btn btn-secondary px-5 py-2 fs-4">
        Check Your Food
      </button>
    </div>
  );
};

export default Food;
