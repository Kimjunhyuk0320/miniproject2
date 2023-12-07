import React from 'react'
//import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
//Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ImgSlider = () => {

    const imgSize = () => {
        return {
            width: '100vw',
            height: '50vh',
            objectFit: 'cover'
        };
    };

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src="/img/FRIMGSlide1.png" style={imgSize()} /></SwiperSlide>
                <SwiperSlide><img src="/img/FRIMGSlide2.jpeg" style={imgSize()} /></SwiperSlide>
                <SwiperSlide><img src="/img/FRIMGSlide3.jpeg" style={imgSize()} /></SwiperSlide>
            </Swiper>
            <br /><br /><br /><br /><br />
        </>
    )
}

export default ImgSlider