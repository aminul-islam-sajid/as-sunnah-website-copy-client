import React from 'react';
import Bg1StColor from '../reUse/Bg1StColor';
import CardComponent from '../reUse/CardComponent';
import CardPrimary from '../reUse/CardPrimary';
import { images } from '../../Images/Images';

const ProjectCard = () => {
    return (
        <Bg1StColor>
            <CardComponent hadeLine='চলমান প্রজেক্ট'>
                <CardPrimary title='hallo' img={images.slide1} subTitle='hallo bangladash' />
            </CardComponent>
        </Bg1StColor>

    );
};

export default ProjectCard;