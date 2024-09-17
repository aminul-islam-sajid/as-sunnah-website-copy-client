import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { images } from '../../Images/Images';


const MainCarousel = () => {
    return (
        <div className='my-8'>
            <>
                <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide ><img className='rounded-xl' src={images.slide1} alt="Images" /> </SwiperSlide>
                    <SwiperSlide ><img className='rounded-xl' src={images.slide2} alt="Images" /> </SwiperSlide>
                    <SwiperSlide ><img className='rounded-xl' src={images.slide3} alt="Images" /> </SwiperSlide>
                    <SwiperSlide ><img className='rounded-xl' src={images.slide4} alt="Images" /> </SwiperSlide>
                    <SwiperSlide ><img className='rounded-xl' src={images.slide5} alt="Images" /> </SwiperSlide>
                    <SwiperSlide ><img className='rounded-xl' src={images.slide6} alt="Images" /> </SwiperSlide>
                    <SwiperSlide ><img className='rounded-xl' src={images.slide7} alt="Images" /> </SwiperSlide>
                    <SwiperSlide ><img className='rounded-xl' src={images.slide8} alt="Images" /> </SwiperSlide>
                    <SwiperSlide ><img className='rounded-xl' src={images.slide9} alt="Images" /> </SwiperSlide>
                    <SwiperSlide ><img className='rounded-xl' src={images.slide10} alt="Images" /> </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default MainCarousel;