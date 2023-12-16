import React, { useEffect } from 'react';
import { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { imageContext } from '../../providers/ImageProvider';


const StartBooking = () => {
    const { title,text ,placeId} = useContext(imageContext);
    const navigate=useNavigate();
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const origin = form.origin.value;
        const destination = form.destination.value;
        const startDate = form.startdate.value;
        const endDate = form.enddate.value;
        console.log(origin, destination, startDate, endDate);
       
    }
    return (

        <div className='md:flex flex-row'>
            <div className='w-2/5 flex items-center justify-center'>
                <div className='mx-6 px-6 my-3'>
                    <h2 className='font-bold text-5xl text-white'>{title}</h2>
                    <p className='text-white text-left my-5'>{text}
                    </p>
                    

                </div>
            </div>
            <div className='h-full w-3/5'>
                <div className="hero  bg-transparent">
                    <div className="hero-content ">

                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
                            <form onSubmit={handleBooking} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Origin</span>
                                    </label>
                                    <input type="text" name='origin' placeholder="Your Place" className="input input-bordered placeholder-black text-sm bg-slate-100 font-bold" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Destination</span>
                                    </label>
                                    <input type="text" name='destination' placeholder={title} className="input input-bordered placeholder-black text-sm bg-slate-100 font-bold" readOnly />

                                </div>
                                <div className='flex'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Start Date</span>
                                        </label>
                                        <input type="date" name='startdate' className="input input-bordered placeholder-black text-sm bg-slate-100 font-bold" required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">End Date</span>
                                        </label>
                                        <input type="date" name='enddate' className="input input-bordered placeholder-black text-sm bg-slate-100 font-bold" required />

                                    </div>
                                </div>
                               <Link to={`/hotels/${placeId}`} className='btn btn-warning'> <button >Start Booking</button></Link>
                                <Link to='/' className='link link-primary'>More Places</Link>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default StartBooking;