import React from 'react';
import Container from '../components/Container';
import Bg2ndColor from '../components/reUse/Bg2ndColor';
import InputHome from '../components/Home/InputHome';
import MainCarousel from '../components/Home/MainCarousel';
import AboutText from '../components/Home/AboutText';

const Home = () => {
    return (

        <div>
            <InputHome />
            <MainCarousel />
            <AboutText />
        </div>

    );
};

export default Home;