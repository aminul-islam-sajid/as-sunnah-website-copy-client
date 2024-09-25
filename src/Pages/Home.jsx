import React from 'react';
import InputHome from '../components/Home/InputHome';
import MainCarousel from '../components/Home/MainCarousel';
import AboutText from '../components/Home/AboutText';
import DonateCard from '../components/Home/DonateCard';
import ProjectCard from '../components/Home/ProjectCard';

const Home = () => {
    return (

        <div>
            <InputHome />
            <MainCarousel />
            <AboutText />
            <DonateCard />
            <ProjectCard />
        </div>

    );
};

export default Home;