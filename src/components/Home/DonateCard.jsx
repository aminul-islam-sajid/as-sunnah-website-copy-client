import React from 'react';
import CardPrimary from '../reUse/CardPrimary';
import { images } from '../../Images/Images';
import Container from '../Container';

const DonateCard = () => {
    return (
        <Container>
            <div>
                <CardPrimary img={images.goldenIMG} title='Hallo card' subTitle='hallo subTitle' btn='Donate' />
            </div>
        </Container>
    );
};

export default DonateCard;