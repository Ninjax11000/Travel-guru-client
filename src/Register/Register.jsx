import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { updateCurrentUser, updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate=useNavigate();

    const handleSubmit = (event) => {

        event.preventDefault();
        const form = event.target;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpassword = form.confirmpassword.value;
        console.log(firstname, lastname, email, password, confirmpassword);
        const fullName = firstname + " " + lastname;
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                updateProfile(createdUser, {
                    displayName: fullName
                })
                    .then(alert('user created successfully!'))
                    .catch(error2 => {
                        console.log(error2.message);
                    })
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='bg-white'>

            <div className="hero mt-3 bg-white">
                <div className="hero-content md:w-1/2 sm:w-3/4 ">

                    <div className="card shrink-0 w-full border border-gray-700 rounded-md  bg-white">

                        <form onSubmit={handleSubmit} className="card-body text-black">
                            <h3 className="text-2xl font-bold">Create an account</h3>
                            <div className="form-control border-b border-slate-400">

                                <input type="text" name='firstname' placeholder="First Name" className="input text-sm focus:outline-none border-none bg-transparent text-gray-800 placeholder-black " required />
                            </div>
                            <div className="form-control border-b border-slate-400">

                                <input type="text" name='lastname' placeholder="Last Name" className="input text-sm focus:outline-none border-none bg-transparent text-gray-800 placeholder-black " required />
                            </div>
                            <div className="form-control border-b border-slate-400">

                                <input type="email" name='email' placeholder="Your email" className="input text-sm focus:outline-none border-none bg-transparent text-gray-800 placeholder-black " required />
                            </div>
                            <div className="form-control border-b border-slate-400">

                                <input type="text" name='password' placeholder="Your Password" className="input text-sm focus:outline-none border-none bg-transparent text-gray-800 placeholder-black " required />
                            </div>
                            <div className="form-control border-b border-slate-400">

                                <input type="text" name='confirmpassword' placeholder="Confirm Password" className="input text-sm focus:outline-none border-none bg-transparent text-gray-800 placeholder-black " required />
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Create an account</button>
                            </div>
                            <p className='text-center my-3'>Already have an account? <Link to='/login' className='text-warning underline'>Login</Link></p>
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
    );
};

export default Register;