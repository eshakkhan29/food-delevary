
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './components/Food/Breakfast/Breakfast';
import Dinner from './components/Food/Dinner/Dinner';
import Food from './components/Food/Food';
import Lunch from './components/Food/Lunch/Lunch';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Food></Food>
      <Routes>
          <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='/lunch' element={<Lunch></Lunch>}></Route>
          <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        </Routes>
    </div>
  );
}

export default App;
