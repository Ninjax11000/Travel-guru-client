import React, { createContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import bg1 from '/images/places/coxsbazar.png';



export const imageContext = createContext('');


const Main = () => {
    const [text, setText] = useState("Cox's Bazar is a famous tourist destination known for its long sandy beach. It is located in the southeastern part of Bangladesh and is one of the most popular beach resorts in the world. The beach is known for its natural beauty, with a long stretch of golden sand and blue waters. Tourists often enjoy beachcombing, engaging in various water sports, and visiting nearby attractions like Himchari National Park. The best time to visit Cox's Bazar is from November to February when the weather is pleasant. Accommodation options are plentiful, ranging from budget-friendly hotels to luxurious resorts along the beach.");
    const [url, setUrl] = useState(bg1);
   
    const [title, setTitle] = useState('Cox\'s Bazar');
    const setTextImage = {
        title,
       
        url,
        text,
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
                   <Outlet></Outlet>
                </imageContext.Provider>
            </div>
        </div>
    );
};

export default Main;