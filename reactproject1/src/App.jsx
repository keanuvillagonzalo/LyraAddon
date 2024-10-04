import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import required modules
import { Pagination, Navigation, Controller } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Excitation from './Excitation'
import Optical from './Optical'
import Electrical from './Electrical'
import Interface from './Interface'
import Mechanical from './Mechanical'
import './App.css';

export default function App() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [controlledSwiper, setControlledSwiper] = useState(null);



    return (
        <>
            <div style={{ display: "flex" }}>
                <div className="container">
                    <h1 style={{ color: '#A72608', fontFamily: "'PT Sans', sans-serif", fontSize: '5rem' }}>
                        Technical <br /> Details
                    </h1>
                    <Swiper
                        onSwiper={setSwiperRef}
                        direction='vertical'
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={30}
                        navigation={{
                            prevEl: '.custom-prev',
                            nextEl: '.custom-next',
                        }}
                        modules={[Pagination, Navigation, Controller]}
                        className="mySwiper"

                    >
                        <SwiperSlide>Excitation & Detection</SwiperSlide>
                        <SwiperSlide>Optical</SwiperSlide>
                        <SwiperSlide>Electrical</SwiperSlide>
                        <SwiperSlide>Mechanical</SwiperSlide>
                        <SwiperSlide>Interface & Processing</SwiperSlide>
                    </Swiper>
                    {/* Custom Navigation Buttons */}
                    <div className="swiper-button-prev custom-prev"></div>
                    <div className="swiper-button-next custom-next"></div>
                </div>

                {/* New Swiper */}
                <Swiper
                    id="controlled-swiper" // Added ID for specific targeting
                    onSwiper={setControlledSwiper}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }}
                    modules={[Navigation, Controller]}
                    className="controlledSwiper"
                    style={{
                        width: "90vh",
                        height: "90vh",
                        backgroundColor: "white"
                    }}
                    controller={{ control: swiperRef }} // Link with the existing Swiper
                >
                    <SwiperSlide><Excitation /></SwiperSlide>
                    <SwiperSlide><Optical /></SwiperSlide>
                    <SwiperSlide><Electrical /></SwiperSlide>
                    <SwiperSlide><Mechanical /></SwiperSlide>
                    <SwiperSlide><Interface /></SwiperSlide>
                </Swiper>

            </div>

        </>
    );
}
