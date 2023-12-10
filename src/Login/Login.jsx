import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-white pb-5' >

            <div className="hero mt-3 bg-white">
                <div className="hero-content md:w-1/2 sm:w-3/4 ">

                    <div className="card shrink-0 w-full border border-gray-700 rounded-md  bg-white">

                        <form className="card-body text-black">
                            <h3 className="text-2xl font-bold">Login</h3>
                            <div className="form-control border-b border-slate-400">

                                <input type="email" placeholder="Your email" className="input text-sm focus:outline-none border-none bg-transparent text-gray-800 placeholder-black " required />
                            </div>
                            <div className="form-control border-b border-slate-400">

                                <input type="text" placeholder="Your Password" className="input text-sm focus:outline-none border-none bg-transparent text-gray-800 placeholder-black " required />
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-warning underline">Forgot password?</a>
                            </label>

                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Login</button>
                            </div>
                            <p className='text-center my-3'>Don't have an account? <Link to='/login/register' className='text-warning underline'>Create an account</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="divider divider-neutral w-1/3 mx-auto">OR</div>
            <div className='flex flex-col items-center'>
                <div className='border border-slate-400 rounded-[30px] flex items-center   sm:w-3/4 md:w-1/3 my-3 px-2'>
                    <img className='w-[50px] py-2 px-2' src="/images/icons/fb.png" alt="" /> <p>Continue with Facebook</p>
                </div>
                <div className='border border-slate-400 rounded-[30px] flex items-center  sm:w-3/4 md:w-1/3  my-3 px-2'>
                    <img className='w-[50px] py-2 px-2' src="/images/icons/google.png" alt="" /> <p>Continue with Google</p>
                </div>
            </div>
        </div>
    )
};

export default Login;