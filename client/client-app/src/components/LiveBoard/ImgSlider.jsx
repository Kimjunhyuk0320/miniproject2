import React from 'react'
//import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
//Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/autoplay'; 


const ImgSlider = () => {

    const imgSize = () => {
        return {
            width: '100vw'
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
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src="/img/imgslide3.jpg" style={imgSize()} /></SwiperSlide>
                <SwiperSlide><img src="/img/imgslide1.jpg" style={imgSize()} /></SwiperSlide>
                <SwiperSlide><img src="/img/imgslide2.jpg" style={imgSize()} /></SwiperSlide>
            </Swiper>
            <br /><br /><br /><br /><br />
        </>
    )
}

export default ImgSlider


// import React from 'react'
// import Swiper core and required modules
// import { Navigation, Pagination, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// const HeadAd = () => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, A11y]}
//       spaceBetween={0}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide><img src="/img/camp/camp1.jpg"/></SwiperSlide>
//       <SwiperSlide><img src="/img/camp/camp1.jpg"/></SwiperSlide>
//       <SwiperSlide><img src="/img/camp/camp1.jpg"/></SwiperSlide>
//     </Swiper>
//   )
// }

// export default HeadAd