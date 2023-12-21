import React from 'react';
import { FaStar } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
    const { name, beds, guests, rating, pricePerNight } = hotel;
    return (
        <div className='w-full px-3 my-3 py-3'>

            <div className="card md:card-side bg-slate-100 shadow-xl">
                <figure className='w-full md:w-[400px]'><img className='h-full' src="/images/places/hotel.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex '>
                        <div className='me-3'>
                            <p>{beds} beds</p>
                        </div>
                        <div>
                            <p>{guests} guests</p>
                        </div>
                    </div>
                    <div className='flex '>
                        <div className='me-3'>
                            <p>2 bedrooms</p>
                        </div>
                        <div>
                            <p>2 baths</p>
                        </div>
                    </div>
                    <p>Wifi Airconditioning Kitchen</p>
                    <p >Cancellation flexibility avaibale</p>
                    <div className='flex '>
                        <div className='me-3 flex items-center'>
                            <FaStar></FaStar>
                            <p>{rating}</p>
                        </div>
                        <div>
                            <p>{pricePerNight} $/night</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HotelCard;