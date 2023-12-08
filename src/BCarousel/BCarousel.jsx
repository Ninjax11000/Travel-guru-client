import React, { useContext, useEffect, useState} from 'react';
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




const BCarousel = () => {
    const { setText, setUrl,setTitle,setShow } = useContext(imageContext);
    const [places,setPlaces]=useState(null);
   useEffect(()=>{
    fetch('http://localhost:5000/data')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setPlaces(data);
    })
    .catch(error=> console.log(error.message))
   },[])

    // const textCoxs = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo consectetur corrupti beatae corporis quaerat tenetur sint ipsam sequi nobis! Coxsbazar";
    // const textSajek = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo consectetur corrupti beatae corporis quaerat tenetur sint ipsam sequi nobis!Sajek";
    // const textSreemongol = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo consectetur corrupti beatae corporis quaerat tenetur sint ipsam sequi nobis!Sreemongol";
    // const textSundorbon = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo consectetur corrupti beatae corporis quaerat tenetur sint ipsam sequi nobis!Sundorbon";
    
    // const title1='COX\'S BAZAR';
    // const title2='SAJEK';
    // const title3='SREEMONGOL';
    // const title4='SUNDORBAN';
    
    const handleTextUrl = (id,url)=>{

           const text= places[id].placeDetails;

            setText(text);
            setUrl(url);

            const title=places[id].placeTitle;
            setTitle(title);
            setShow(false);
    }

    const breakpoints = {
        // When window width is >= 768px (medium devices)
        768: {
          slidesPerView: 3,
        },
      };

    return (
        <div className='w-full' >
            
            <>
                <Swiper

                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={20}
                    pagination={{
                        dynamicBullets: true,
                        
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={
                            breakpoints
                    }
                    
                >
                    <SwiperSlide 
                    style={{backgroundImage:`url(${coxsbazar})`,backgroundSize:'100% 100%',cursor: 'pointer',}} 
                    onClick={()=>handleTextUrl(0,coxsbazar)}
                    >  
                    </SwiperSlide>
                    <SwiperSlide 
                    style={{backgroundImage:`url(${sajek})`,backgroundSize:'100% 100%',cursor: 'pointer'}}
                    onClick={()=>handleTextUrl(1, sajek)}
                    >   
                    </SwiperSlide>
                    <SwiperSlide 
                    style={{backgroundImage:`url(${sreemongol})`,backgroundSize:'100% 100%',cursor: 'pointer'}} 
                    onClick={()=>handleTextUrl(2, sreemongol)}
                    >   
                    </SwiperSlide>
                    <SwiperSlide 
                    style={{backgroundImage:`url(${sundorbon})`,backgroundSize:'100% 100%',cursor: 'pointer'}} 
                    onClick={()=>handleTextUrl(3, sundorbon)}
                    >   
                    </SwiperSlide>
                   
                    
                </Swiper>
        
                
            </>
            
            
            
        </div>
    );
};

export default BCarousel;