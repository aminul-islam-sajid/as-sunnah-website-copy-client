import React from 'react';
import Bg1StColor from '../reUse/Bg1StColor';
import Container from '../Container';
import { images } from '../../Images/Images';

const AboutText = () => {
    return (
        <Bg1StColor>
            <div>
                <Container>
                    <div className='lg:flex py-10 m-auto justify-around'>
                        <div className=''>
                            <img className='rounded-full' src={images.goldenIMG} alt="image" />
                        </div>
                        <div className='lg:w-6/12'>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quidem vero, eaque blanditiis maxime nostrum sapiente. Fugit nihil dolores, velit adipisci laborum accusantium placeat porro nobis exercitationem ducimus. Nobis, aperiam!</p>
                        </div>
                    </div>
                </Container>
            </div>
        </Bg1StColor>
    );
};

export default AboutText;