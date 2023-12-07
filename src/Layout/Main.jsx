import React, { createContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import bg1 from '/images/places/coxsbazar.png';

export const imageContext = createContext('');


const Main = () => {
    const [text,setText]=useState(null);
    const [url, setUrl]=useState(bg1);
    const setTextImage = {
        setText,
        setUrl,
    }
    return (
        <div style={
            {
            backgroundImage:`url(${url})`,
            height:'100vh',width:'100%',
            backgroundPosition:'center center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'100% 110%',
            
            }} >
            <div  className='h-full bg-black bg-opacity-50'>
            <Navbar></Navbar>
            <imageContext.Provider value={setTextImage}>
            <Outlet ></Outlet>
            </imageContext.Provider>
            </div>
        </div>
    );
};

export default Main;