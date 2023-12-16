import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelCard from '../HotelCard/HotelCard';
import { imageContext } from '../../providers/ImageProvider';

const Hotels = () => {
    const hotels = useLoaderData();
    const {title}=useContext(imageContext);
    return (
        <div className='bg-white '>
            <div className="divider my-0 py-0 px-10 divider-neutral"></div>

           <div className='container mx-auto  px-4'>
           <h2 className='text-2xl text-black font-bold my-3'>Stay in {title}</h2>
            {
                hotels.map(hotel=>
                    <HotelCard 
                    key={hotel.id}
                    hotel={hotel}
                    ></HotelCard>
                )
            }
           </div>

        </div>
    );
};

export default Hotels;