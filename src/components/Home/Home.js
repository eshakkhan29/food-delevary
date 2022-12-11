import React from 'react';
import Food from '../Food/Food';
import Hero from '../Hero/Hero';
import Chooseus from '../Chooseus/Chooseus';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Food></Food>
            <div className='text-center'>
                <Outlet/>
                <button className="mt-5 btn btn-secondary px-5 py-2 fs-4">
                    Check Your Food
                </button>
            </div>
            <Chooseus></Chooseus>
        </div>
    );
};

export default Home;