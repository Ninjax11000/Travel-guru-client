import React, { useContext} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import sajek from '/images/places/Sajek.png';
import sreemongol from '/images/places/Sreemongol.png';
import sundorbon from '/images/places/sundorbon.png';
import coxsbazar from '/images/places/coxsbazar.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles.css';
import { Pagination, Navigation } from 'swiper/modules';

import { imageContext } from '../Layout/Main';
import { Link } from 'react-router-dom';



const BCarousel = () => {
    const { setText, setUrl } = useContext(imageContext);

    const textCoxs = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo consectetur corrupti beatae corporis quaerat tenetur sint ipsam sequi nobis!";
    const textSajek = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo consectetur corrupti beatae corporis quaerat tenetur sint ipsam sequi nobis!";
    const textSreemongol = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo consectetur corrupti beatae corporis quaerat tenetur sint ipsam sequi nobis!";
    const textSundorbon = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo consectetur corrupti beatae corporis quaerat tenetur sint ipsam sequi nobis!";
    
    const handleTextUrl = (text, uRl)=>{
            setText(text);
            setUrl(uRl);
    }

    

    return (
        <div >
            <>
                <Swiper

                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        dynamicBullets: true,
                        
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    
                >
                    <SwiperSlide 
                    style={{backgroundImage:`url(${coxsbazar})`,backgroundSize:'100% 100%',cursor: 'pointer'}} 
                    onClick={()=>handleTextUrl(textCoxs, coxsbazar)}
                    >  
                    </SwiperSlide>
                    <SwiperSlide 
                    style={{backgroundImage:`url(${sajek})`,backgroundSize:'100% 100%',cursor: 'pointer'}}
                    onClick={()=>handleTextUrl(textSajek, sajek)}
                    >   
                    </SwiperSlide>
                    <SwiperSlide 
                    style={{backgroundImage:`url(${sreemongol})`,backgroundSize:'100% 100%',cursor: 'pointer'}} 
                    onClick={()=>handleTextUrl(textSreemongol, sreemongol)}
                    >   
                    </SwiperSlide>
                    <SwiperSlide 
                    style={{backgroundImage:`url(${sundorbon})`,backgroundSize:'100% 100%',cursor: 'pointer'}} 
                    onClick={()=>handleTextUrl(textSundorbon, sundorbon)}
                    >   
                    </SwiperSlide>
                   
                    
                </Swiper>
        
                
            </>
            
            <h2>Carousel Comming soon!!!!</h2>
            {/* <button onClick={handletext} className='btn btn-warning'></button>
            <button onClick={handleurl} className='btn btn-primary'></button> */}
        </div>
    );
};

export default BCarousel;