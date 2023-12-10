import React, { useContext } from 'react';
import BCarousel from '../BCarousel/BCarousel';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { imageContext } from '../Layout/Main';

const Banner = () => {
   const {text, title} =useContext(imageContext);

   
    return (
        <div className='md:flex flex-row '>
            <div className='md:w-2/5 flex items-center justify-center'>
                <div className='mx-6 px-6 my-3'>
                    <h2 className='font-bold text-5xl text-white'>{title}</h2>
                    <p className='text-white text-left my-5'>{text.length==100 ? text : `${text.slice(0, 100)}...`}
                    </p>
                    <Link to='/booknow'> <button  className='btn btn-warning'>Booking  <FaArrowRight /> </button></Link>

                </div>
            </div>
            <div className='h-full md:w-3/5 sm:w-3/5'>
                <BCarousel></BCarousel>
            </div>
        </div>
    );
};

export default Banner;