import "./App.css";
import Chooseus from "./components/Chooseus/Chooseus";
import Food from "./components/Food/Food";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Food></Food>
      <Chooseus></Chooseus>
    </div>
  );
}

export default App;
