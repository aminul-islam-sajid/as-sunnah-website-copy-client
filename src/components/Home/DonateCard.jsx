import React from 'react';
import CardPrimary from '../reUse/CardPrimary';
import { images } from '../../Images/Images';
import Container from '../Container';
import Bg2ndColor from '../reUse/Bg2ndColor';

const DonateCard = () => {
    return (
        <Bg2ndColor>
            <Container>
                <div className='pb-8'>
                    <h1 className='text-xl text-center py-8 text-black'>চলুন একসাথে একটি পরিবর্তন আনি</h1>
                    <CardPrimary
                        img={images.goldenIMG}
                        title='জরুরী বন্যা তহবিল'
                        subTitle='প্রতিবছর বর্ষাকালে বাংলাদেশের প্রায় ২৬,০০০ বর্গ কিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়। এ সময় বিশেষ ভাবে দেশের উত্তর অঞ্চলের বানভাসি মানুষ চরম দুর্ভোগের শিকার হয়। আস সুন্নাহ্ ফাউন্ডেশন দেশের বন্যাকবলিত জেলাগুলিতে'
                        btn='দান করুন' />
                </div>
            </Container>
        </Bg2ndColor>
    );
};

export default DonateCard;