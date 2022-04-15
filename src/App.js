import { Route, Routes } from "react-router-dom";
import "./App.css";
import Breakfast from "./components/Food/Breakfast/Breakfast";
import Dinner from "./components/Food/Dinner/Dinner";
import Lunch from "./components/Food/Lunch/Lunch";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
        <Route path="/lunch" element={<Lunch></Lunch>}></Route>
        <Route path="/dinner" element={<Dinner></Dinner>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
