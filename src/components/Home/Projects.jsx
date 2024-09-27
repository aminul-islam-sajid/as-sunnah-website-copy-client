import React from 'react';
import CardComponent from '../reUse/CardComponent';
import CardPrimary from '../reUse/CardPrimary';
import Bg1StColor from '../reUse/Bg1StColor';

const Projects = () => {
    return (
        <Bg1StColor>
            <CardComponent hadeLine={'Projects'}>
                <CardPrimary
                    title={'Projuct'}
                    subTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel cupiditate sapiente explicabo itaque quas cumque quidem aliquid earum impedit. Reprehenderit labore minus, nesciunt reiciendis voluptatibus adipisci quibusdam ipsa voluptate?'}
                />
            </CardComponent>
        </Bg1StColor>
    );
};

export default Projects;