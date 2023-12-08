import React, { createContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import bg1 from '/images/places/coxsbazar.png';
import { FaArrowRight } from "react-icons/fa";

export const imageContext = createContext('');


const Main = () => {
    const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo consectetur corrupti beatae corporis quaerat tenetur sint ipsam sequi nobis! Coxsbazar");
    const [url, setUrl] = useState(bg1);
    const [title, setTitle] = useState('COX\'S BAZAR');
    const setTextImage = {
        setText,
        setUrl,
        setTitle,
    }
    return (
        <div style={
            {
                backgroundImage: `url(${url})`,
                height: '100vh', width: '100%',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 110%',

            }} >
            <div className='h-full bg-black bg-opacity-50'>
                <Navbar></Navbar>

                <imageContext.Provider value={setTextImage}>
                    <div className='flex flex-row'>
                        <div className='w-2/5 flex items-center justify-center'>
                            <div className='mx-6 px-6'>
                                <h2 className='font-bold text-5xl text-white'>{title}</h2>
                                <p className='text-white text-left my-5'>{text}</p>
                                <button className='btn btn-warning'>Booking  <FaArrowRight /> </button>
                               
                            </div>
                        </div>
                        <div className='h-full w-3/5'>
                            <Outlet ></Outlet>
                        </div>
                    </div>
                </imageContext.Provider>
            </div>
        </div>
    );
};

export default Main;