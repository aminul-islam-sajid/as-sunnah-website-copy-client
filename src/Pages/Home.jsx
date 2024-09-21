import React from 'react';
import InputHome from '../components/Home/InputHome';
import MainCarousel from '../components/Home/MainCarousel';
import AboutText from '../components/Home/AboutText';
import DonateCard from '../components/Home/DonateCard';

const Home = () => {
    return (

        <div>
            <InputHome />
            <MainCarousel />
            <AboutText />
            <DonateCard />
        </div>

    );
};

export default Home;