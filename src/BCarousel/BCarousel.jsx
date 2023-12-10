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
        setShow(false);
    })
    .catch(error=> console.log(error.message))
   },[])

   
    
    const handleTextUrl = (id,url)=>{

           const text= places[id].placeDetails;

            setText(text);
            setUrl(url);

            const title=places[id].placeTitle;
            setTitle(title);
           
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
                    >  <h2 className='font-bold text-white mt-auto mb-3 mr-auto ml-3 text-2xl'>Cox's Bazar</h2>
                    </SwiperSlide>
                    <SwiperSlide 
                    style={{backgroundImage:`url(${sajek})`,backgroundSize:'100% 100%',cursor: 'pointer'}}
                    onClick={()=>handleTextUrl(1, sajek)}
                    >  
                    <h2 className='font-bold text-white mt-auto mb-3 mr-auto ml-3 text-2xl'>Sajek</h2> 
                    </SwiperSlide>
                    <SwiperSlide 
                    style={{backgroundImage:`url(${sreemongol})`,backgroundSize:'100% 100%',cursor: 'pointer'}} 
                    onClick={()=>handleTextUrl(2, sreemongol)}
                    >   
                    <h2 className='font-bold text-white mt-auto mb-3 mr-auto ml-3 text-2xl'>Sreemongol</h2>
                    </SwiperSlide>
                    <SwiperSlide 
                    style={{backgroundImage:`url(${sundorbon})`,backgroundSize:'100% 100%',cursor: 'pointer'}} 
                    onClick={()=>handleTextUrl(3, sundorbon)}
                    > 
                    <h2 className='font-bold text-white mt-auto mb-3 mr-auto ml-3 text-2xl'>Sundorbon</h2>  
                    </SwiperSlide>
                   
                    
                </Swiper>
        
                
            </>
            
            
            
        </div>
    );
};

export default BCarousel;