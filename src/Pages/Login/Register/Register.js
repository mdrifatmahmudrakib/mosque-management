import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import "./Register.css";
import scolarbanner from "../../../1_images/8_donate_page/1_donate_home.jpg"
import bsml from "../../../1_images/1_home/2_bsml-txt.png"

import useToken from '../../../hooks/useToken';
import { useForm } from 'react-hook-form';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);




    //user info save krbo
    const [token] = useToken(user || gUser); // token
    console.log(user)
    const navigate = useNavigate();

    let signInError;
    if (error || gError || updating) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small> </p>
    }



    const navigateLogin = () => {
        navigate('/login')
    }




    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }


    if (token) {
        navigate('/home');
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        const displayName = event.target.displayName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName });
        console.log('Updated profile');
        console.log(event)
        // navigate('/home')


    }




    return (




        <div className='text-white text-start ' style={{
            backgroundImage: `url(${scolarbanner})`, backgroundRepeat: 'no-repeat', height: "1000px", paddingTop: "5%",
        }}>
            <div className="container mx-auto " >
                <div className="row content justify-content-center ">

                    <div className="col-md-6 " id='sdw'>
                        <div className="mb-3 w-full pt-5 d-flex justify-content-center ">
                            <img className="" src={bsml} alt="" />
                        </div>
                        <h3 className="text-center mb-3">Please SignUp an Account</h3>

                        <form style={{ width: '80%', marginLeft: "10%", marginTop: "10%" }} onSubmit={handleRegister}>
                            <div className=" mb-3 ">
                                <label for="text">Name</label>
                                <input type="text" name='displayName' className="form-control" placeholder='Your Name' />
                            </div>
                            <div className=" mb-3 ">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="1" placeholder='Email Address' required className="form-control" />
                            </div>
                            <div className=" mb-3">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="2" placeholder='Password' required className="form-control " />
                            </div>
                            <div>
                                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                                <label className={`ps-2 text-light ${agree ? '' : 'text-warning'}`} htmlFor="terms">Accept terms and conditions</label>
                                <input
                                    disabled={!agree}
                                    className='btn btn-danger  w-50 mx-auto d-block my-2 '
                                    type="submit"
                                    value="Register" />
                            </div>


                        </form>
                        <div style={{ width: '80%', marginLeft: "10%", marginTop: "10%", paddingBottom: "10%" }}>
                            <p className="text-light">Already have an account? <Link to='/login ' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
                            <button onClick={() => signInWithGoogle()} className="btn btn-success">Continue With Google</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        // <div className='container '>
        //     <div className="card m-3 border-0" >
        //         <div className="row g-0">
        //             <div className="col-md-6">
        //                 <img src="" className="img-fluid rounded-start" alt="..." />
        //             </div>



        //             <div className="col-md-6 bg-dark border justify-content-center ">
        //                 <div className='rounded-5 m-4' >
        //                     <div className="register-form  ">
        //                         <h2 className="m-4 text-danger" style={{ textAlign: 'center' }}>Please Register</h2>
        //                         <form onSubmit={handleRegister}>
        //                             <input type="text" name='displayName' placeholder='Your Name' />
        //                             <input type="email" name="email" id="1" placeholder='Email Address' required />
        //                             <input type="password" name="password" id="2" placeholder='Password' required />
        // <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        // <label className={`ps-2 text-light ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept terms and conditions</label>
        // <input
        //     disabled={!agree}
        //     className='btn btn-danger  w-50 mx-auto d-block my-2 '
        //     type="submit"
        //     value="Register" />
        //                         </form>
        // <p className="text-light">Already have an account? <Link to='/login ' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
        // <button onClick={() => signInWithGoogle()} className="btn btn-success">Continue With Google</button>


        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


    );
};
export default Register;