import React from 'react';
import Bg2ndColor from '../reUse/Bg2ndColor';
import CardComponent from '../reUse/CardComponent';
import CardPrimary from '../reUse/CardPrimary';
import { images } from '../../Images/Images';

const NewsCard = () => {
    return (
        <div>
            <Bg2ndColor>
                <CardComponent hadeLine='সাম্প্রতিক সংবাদ'>
                    <CardPrimary
                        className={'bg-white text-black'}
                        img={images.goldenIMG}
                        date={new Date().toLocaleDateString()}
                        pragraph={'কুরআন প্রতিযোগিতার প্রথম ধাপের পুরস্কার বিতরণ'}
                    />
                </CardComponent>
            </Bg2ndColor>
        </div>
    );
};

export default NewsCard;