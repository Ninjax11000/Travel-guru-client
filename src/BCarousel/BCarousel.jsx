import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import sajek from '/images/places/Sajek.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles.css';
import { Pagination, Navigation } from 'swiper/modules';

import { imageContext } from '../Layout/Main';

const BCarousel = () => {
    const { setText, setUrl } = useContext(imageContext);
    const handletext = () => {
        setText('new TExt');
    }

    const handleurl = () => {
        setUrl('new URL')
    }



    return (
        <div >
            <>
                <Swiper

                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{backgroundImage:`url(${sajek})`,backgroundSize:'100% 100%'}} >
                        
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>


            </>
            <h2>Carousel Comming soon!!!!</h2>
            <button onClick={handletext} className='btn btn-warning'></button>
            <button onClick={handleurl} className='btn btn-primary'></button>
        </div>
    );
};

export default BCarousel;