import React from 'react';
import Container from '../components/Container';
import Bg2ndColor from '../components/reUse/Bg2ndColor';
import InputHome from '../components/Home/InputHome';
import MainCarousel from '../components/Home/MainCarousel';

const Home = () => {
    return (

        <Bg2ndColor>
            <div className='py-8'>
                <Container>
                    <InputHome />
                    <MainCarousel />
                </Container>
            </div>
        </Bg2ndColor >

    );
};

export default Home;