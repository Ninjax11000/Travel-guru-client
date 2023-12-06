import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import bg1 from '../../public/images/places/sundorbon.png'

const Main = () => {
    return (
        <div style={{backgroundImage:`url(${bg1})`,height:'100vh',width:'100%',backgroundPosition:'center center' ,backgroundRepeat:'no-repeat',backgroundSize:'100% 110%'}}>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Main;