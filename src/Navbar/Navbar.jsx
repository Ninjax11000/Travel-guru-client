import React from 'react';

const Navbar = () => {
    return (
        <div >
            <div className=" navbar justify-around bg-transparent pt-9">

                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>

                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className=''><img src="/logo1.png" alt="" /></a>


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
                <div className=" md:block hidden">
                    <a className="btn btn-ghost text-white">News</a>
                </div>
                <div className="md:block hidden">
                    <a className="btn btn-ghost text-white">Destination</a>
                   
                </div>
                <div className="md:block hidden">
                    <a className="btn btn-ghost text-white">Blog</a>
                </div>
                <div className="md:block hidden">
                    <a className="btn btn-ghost text-white">Contact</a>
                </div>
                <div className="md:block hidden">
                    <a className="btn btn-warning ">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;