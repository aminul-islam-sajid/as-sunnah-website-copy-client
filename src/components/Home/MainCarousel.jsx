import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { images } from '../../Images/Images';
import Bg2ndColor from '../reUse/Bg2ndColor';
import Container from '../Container';

const MainCarousel = () => {
    return (
        <div className='border-0'>
            <Bg2ndColor>
                <div className='pb-8'>
                    <Container>
                        <Swiper
                            spaceBetween={50}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}

                            loop={true} // Add this line to enable continuous looping
                            modules={[Autoplay, Pagination]} // Include Navigation module
                            className="mySwiper"
                        >
                            <SwiperSlide><img className='rounded-xl' src={images.slide1} alt="Slide 1" /></SwiperSlide>
                            <SwiperSlide><img className='rounded-xl' src={images.slide2} alt="Slide 2" /></SwiperSlide>
                            <SwiperSlide><img className='rounded-xl' src={images.slide3} alt="Slide 3" /></SwiperSlide>
                            <SwiperSlide><img className='rounded-xl' src={images.slide4} alt="Slide 4" /></SwiperSlide>
                            <SwiperSlide><img className='rounded-xl' src={images.slide5} alt="Slide 5" /></SwiperSlide>
                            <SwiperSlide><img className='rounded-xl' src={images.slide6} alt="Slide 6" /></SwiperSlide>
                            <SwiperSlide><img className='rounded-xl' src={images.slide7} alt="Slide 7" /></SwiperSlide>
                            <SwiperSlide><img className='rounded-xl' src={images.slide8} alt="Slide 8" /></SwiperSlide>
                            <SwiperSlide><img className='rounded-xl' src={images.slide9} alt="Slide 9" /></SwiperSlide>
                            <SwiperSlide><img className='rounded-xl' src={images.slide10} alt="Slide 10" /></SwiperSlide>
                        </Swiper>
                    </Container>
                </div>
            </Bg2ndColor>
        </div>
    );
};

export default MainCarousel;
