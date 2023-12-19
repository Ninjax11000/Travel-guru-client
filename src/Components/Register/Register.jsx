import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const location  = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [cerror, setCError] = useState("");
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const hangleGoogleLogin = ()=>{
        googleSignIn(googleProvider)
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successful!",
                showConfirmButton: false,
                timer: 1500
              });
            navigate(from);
            
        })
        .catch(error=>{
            console.log(error.message);
        })
}

    const handlePassword = (event) => {
        const passwordInput = event.target.value;
        setPassword(passwordInput);
        if (passwordInput.length < 6) {
            setError('Password must be 6 characters long!')
        }
        else {
            setError("");
        }
    }
    const handleConfirm = (event) => {
        const inputConfirm = event.target.value;

        if (inputConfirm !== password) {
            setCError('Passwords don not match!')
        }
        else {
            setCError("");
        }
    }

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
                    .then(Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Registered!",
                        showConfirmButton: false,
                        timer: 1500
                    }))
                    .catch(error2 => {
                        console.log(error2.message);
                    })
                navigate(from);
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

                                <input
                                    type="password"
                                    name='password'
                                    placeholder="Your Password"
                                    value={password}
                                    onChange={handlePassword}
                                    className="input text-sm focus:outline-none border-none bg-transparent text-gray-800 placeholder-black " required />
                            </div>
                            {
                                error && <p className="text-red-700">{error}</p>
                            }
                            <div className="form-control border-b border-slate-400">

                                <input
                                    type="password"
                                    name='confirmpassword'
                                    placeholder="Confirm Password"
                                    
                                    onChange={handleConfirm}
                                    className="input text-sm focus:outline-none border-none bg-transparent text-gray-800 placeholder-black " required />
                            </div>
                            { 
                            cerror && <p className='text-red-700'>{cerror}</p>
                            }

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
                <div onClick={hangleGoogleLogin} className='border border-slate-400 rounded-[30px] flex items-center cursor-pointer  sm:w-3/4 md:w-1/3  my-3 px-2'>
                    <img className='w-[50px] py-2 px-2' src="/images/icons/google.png" alt="" /> <p>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Register;