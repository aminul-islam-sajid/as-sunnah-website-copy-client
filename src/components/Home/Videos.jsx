import React from 'react';
import Bg1StColor from '../reUse/Bg1StColor';
import CardComponent from '../reUse/CardComponent';
import CardPrimary from '../reUse/CardPrimary';
import Bg2ndColor from '../reUse/Bg2ndColor';

const Videos = () => {
    return (
        <Bg2ndColor>
            <CardComponent hadeLine={'Videos'}>
                <CardPrimary
                    className='p-0'
                    video='https://www.youtube.com/embed/imqutzWabfI?si=hybu0rOJZby3CMAc'
                />
                <CardPrimary
                    className='p-0'
                    video='https://www.youtube.com/embed/imqutzWabfI?si=hybu0rOJZby3CMAc'
                />
                <CardPrimary
                    className='p-0'
                    video='https://www.youtube.com/embed/imqutzWabfI?si=hybu0rOJZby3CMAc'
                />
                <CardPrimary
                    className='p-0'
                    video='https://www.youtube.com/embed/imqutzWabfI?si=hybu0rOJZby3CMAc'
                />
            </CardComponent>
        </Bg2ndColor>
    );
};

export default Videos;