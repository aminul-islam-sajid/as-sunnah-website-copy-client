import React from 'react';
import CardPrimary from '../reUse/CardPrimary';
import { images } from '../../Images/Images';
import Bg2ndColor from '../reUse/Bg2ndColor';
import CardComponent from '../reUse/CardComponent';

const DonateCard = () => {
    return (
        <Bg2ndColor>
            <CardComponent hadeLine='চলুন একসাথে একটি পরিবর্তন আনি'>
                <CardPrimary
                    img={images.goldenIMG}
                    title='জরুরী বন্যা তহবিল'
                    subTitle='প্রতিবছর বর্ষাকালে বাংলাদেশের প্রায় ২৬,০০০ বর্গ কিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়। এ সময় বিশেষ ভাবে দেশের উত্তর অঞ্চলের বানভাসি মানুষ চরম দুর্ভোগের শিকার হয়। আস সুন্নাহ্ ফাউন্ডেশন দেশের বন্যাকবলিত জেলাগুলিতে'
                    btn='দান করুন' />
                <CardPrimary
                    img={images.goldenIMG}
                    title='জরুরী বন্যা তহবিল'
                    subTitle='প্রতিবছর বর্ষাকালে বাংলাদেশের প্রায় ২৬,০০০ বর্গ কিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়। এ সময় বিশেষ ভাবে দেশের উত্তর অঞ্চলের বানভাসি মানুষ চরম দুর্ভোগের শিকার হয়। আস সুন্নাহ্ ফাউন্ডেশন দেশের বন্যাকবলিত জেলাগুলিতে'
                    btn='দান করুন' />
                <CardPrimary
                    img={images.goldenIMG}
                    title='জরুরী বন্যা তহবিল'
                    subTitle='প্রতিবছর বর্ষাকালে বাংলাদেশের প্রায় ২৬,০০০ বর্গ কিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়। এ সময় বিশেষ ভাবে দেশের উত্তর অঞ্চলের বানভাসি মানুষ চরম দুর্ভোগের শিকার হয়। আস সুন্নাহ্ ফাউন্ডেশন দেশের বন্যাকবলিত জেলাগুলিতে'
                    btn='দান করুন' />
                <CardPrimary
                    img={images.goldenIMG}
                    title='জরুরী বন্যা তহবিল'
                    subTitle='প্রতিবছর বর্ষাকালে বাংলাদেশের প্রায় ২৬,০০০ বর্গ কিলোমিটার এলাকা (১৮%) বন্যায় প্লাবিত হয়। এ সময় বিশেষ ভাবে দেশের উত্তর অঞ্চলের বানভাসি মানুষ চরম দুর্ভোগের শিকার হয়। আস সুন্নাহ্ ফাউন্ডেশন দেশের বন্যাকবলিত জেলাগুলিতে'
                    btn='দান করুন' />
            </CardComponent>
        </Bg2ndColor>
    );
};

export default DonateCard;