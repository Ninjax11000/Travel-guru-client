import React, { createContext, useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import bg1 from '/images/places/coxsbazar.png';
import ImageProvider, { imageContext } from '../providers/ImageProvider';



// export const imageContext = createContext(null);


const Main = () => {
  
   
   const {url} = useContext(imageContext)
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
              
                    <Outlet></Outlet>
               

            </div>
        </div>
    );
};

export default Main;