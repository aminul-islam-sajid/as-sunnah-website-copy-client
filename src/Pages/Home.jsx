import React from 'react';
import InputHome from '../components/Home/InputHome';
import MainCarousel from '../components/Home/MainCarousel';
import AboutText from '../components/Home/AboutText';
import DonateCard from '../components/Home/DonateCard';
import NewsCard from '../components/Home/NewsCard';
import OngoingProjectCard from '../components/Home/OngoingProjectCard';
import Projects from '../components/Home/Projects';
import Videos from '../components/Home/Videos';
import DarkMode from '../components/Them/DarkMode';

const Home = () => {
    return (
        <div className="bg-white dark:bg-nav3 text-black dark:text-text">
            {/* <DarkMode /> */}
            <InputHome />
            <MainCarousel />
            <AboutText />
            <DonateCard />
            <OngoingProjectCard />
            <NewsCard />
            <Projects />
            <Videos />
        </div>

    );
};

export default Home;