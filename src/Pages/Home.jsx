import React from 'react';
import InputHome from '../components/Home/InputHome';
import MainCarousel from '../components/Home/MainCarousel';
import AboutText from '../components/Home/AboutText';
import DonateCard from '../components/Home/DonateCard';
import ProjectCard from '../components/Home/ProjectCard';
import NewsCard from '../components/Home/NewsCard';

const Home = () => {
    return (

        <div>
            <InputHome />
            <MainCarousel />
            <AboutText />
            <DonateCard />
            <ProjectCard />
            <NewsCard />
        </div>

    );
};

export default Home;