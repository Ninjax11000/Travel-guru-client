import React from 'react';
import { useContext } from 'react';
import { imageContext } from '../Layout/Main';
import { Link } from 'react-router-dom';

const StartBooking = () => {
    const {title, setShow}=useContext(imageContext);
    setShow(true);
    return (
        <div className="hero  bg-transparent">
            <div className="hero-content ">
                
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Origin</span>
                            </label>
                            <input type="text" placeholder="Your Place" className="input input-bordered placeholder-black text-sm bg-slate-100 font-bold" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Destination</span>
                            </label>
                            <input type="text" placeholder={title} className="input input-bordered placeholder-black text-sm bg-slate-100 font-bold" readOnly  />
                           
                        </div>
                       <div className='flex'>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Start Date</span>
                            </label>
                            <input type="date"  className="input input-bordered placeholder-black text-sm bg-slate-100 font-bold" required  />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">End Date</span>
                            </label>
                            <input type="date"  className="input input-bordered placeholder-black text-sm bg-slate-100 font-bold" required  />
                           
                        </div>
                       </div>
                       <button className='btn btn-warning'>Start Booking</button>
                       <Link to='/' className='link link-primary'>More Places</Link>
                    </form>
                </div>
            </div>
           
        </div>
    );
};

export default StartBooking;