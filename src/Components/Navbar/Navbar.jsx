import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(alert('Logout Successfull!!'))
            .catch(error => {
                console.log(error.message);
            })
    }
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div >
            <div className={(location.pathname == '/' || location.pathname == '/booknow') ? " navbar justify-around text-white  pt-9" : "navbar justify-around pt-9 bg-white text-black"}>

                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>

                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to='/' className=''><img className='w-[100px]' src={(location.pathname == '/' || location.pathname == '/booknow') ? "/logo1.png" : '/logo.png'} alt="" /></Link>



                {(location.pathname == '/' || location.pathname == '/booknow') ?
                    <div className="form-control sm:w-2/3 md:w-1/4 text-white">
                        <div className='flex relative w-full'>
                            <input type="text" placeholder="Search for your destination" className="input input-bordered border-white bg-transparent w-full  pr-10 placeholder:text-white focus:border-white" />
                            <button className="btn btn-ghost btn-circle absolute right-0 top-0 h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    :
                    <></>
                }

                <div className=" md:block hidden">
                    <a className="btn btn-ghost ">News</a>
                </div>
                <div className="md:block hidden">
                    <a className="btn btn-ghost ">Destination</a>

                </div>
                <div className="md:block hidden">
                    <a className="btn btn-ghost">Blog</a>
                </div>
                <div className="md:block hidden">
                    <a className="btn btn-ghost ">Contact</a>
                </div>
                {
                    user ?
                        <>
                            <div>
                                <p className='text-black font-bold px-1'>{user.displayName}</p>
                                <div className="md:block hidden">
                                    <button onClick={handleLogout} className="btn btn-warning ">Logout</button>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="md:block hidden">
                                <Link to='/login' className="btn btn-warning ">Login</Link>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;