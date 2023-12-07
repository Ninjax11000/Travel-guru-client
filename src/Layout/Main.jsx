import React, { createContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import bg1 from '/images/places/sundorbon.png';

export const imageContext = createContext('');


const Main = () => {
    const [text,setText]=useState('heyy');
    const [url, setUrl]=useState('kjjkkkURL');
    const setTextImage = {
        setText,
        setUrl,
    }
    return (
        <div style={{backgroundImage:`url(${bg1})`,height:'100vh',width:'100%',backgroundPosition:'center center' ,backgroundRepeat:'no-repeat',backgroundSize:'100% 110%'}}>
            <Navbar></Navbar>

            <h2>Text:{text}</h2>
            <h2>url:{url}</h2>
            
            <imageContext.Provider value={setTextImage}>
            <Outlet></Outlet>
            </imageContext.Provider>
        </div>
    );
};

export default Main;