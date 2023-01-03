// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import auth from '../../../firebase.init';
// import Loading from '../../Shared/Loading/Loading';
// import SocialLogin from '../Login/SocialLogin/SocialLogin';
// import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
// import "./Register.css";

// import useToken from '../../../hooks/useToken';
// import { useForm } from 'react-hook-form';
// import { sendEmailVerification } from 'firebase/auth';
// import { toast } from 'react-hot-toast';

// const Register = () => {
//     const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
//     const { register, formState: { errors }, handleSubmit } = useForm();
//     const [agree, setAgree] = useState(false)
//     const [
//         createUserWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
//     const [updateProfile, updating, updateError] = useUpdateProfile(auth);




//     //user info save krbo
//     const [token] = useToken(user || gUser); // token
//     console.log(user)
//     const navigate = useNavigate();


//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";


//     let signInError;
//     if (error || gError || updating) {
//         signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small> </p>
//     }



//     // const navigateLogin = () => {
//     //     navigate('/login')
//     // }




//     if (loading || gLoading || updating) {
//         return <Loading></Loading>
//     }


//     if (token) {
//         // navigate('/home');
//         navigate(from, { replace: true });

//     }


//     const handleRegister = async (event) => {
//         event.preventDefault();
//         const displayName = event.target.displayName.value;
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         // const agree = event.target.terms.checked;
//         await createUserWithEmailAndPassword(email, password)
//         await updateProfile({ displayName });
//         // verifyEmail();
//         // toast.success('Please Verfify Your Email address before Login')
//         console.log('Updated profile');
//         console.log(event)
//         // navigate('/home')



//     }

//     // const verifyEmail = () => {
//     //     sendEmailVerification(auth.currentUser)
//     //         .then(() => {
//     //             console.log('Email Verification Sent');
//     //         })
//     // }


//     return (


//         // <div className='container '>
//         //     <div className="card m-3 border-0" >
//         //         <div className="row g-0">
//         //             <div className="col-md-6">
//         //                 <img src="" className="img-fluid rounded-start" alt="..." />
//         //             </div>



//         //             <div className="col-md-6 bg-dark border justify-content-center ">
//         //                 <div className='rounded-5 m-4' >
//         //                     <div className="register-form  ">
//         //                         <h2 className="m-4 text-danger" style={{ textAlign: 'center' }}>Please Register</h2>
//         //                         <form onSubmit={handleRegister}>
//         //                             <input type="text" name='displayName' placeholder='Your Name' />
//         //                             <input type="email" name="email" id="1" placeholder='Email Address' required />
//         //                             <input type="password" name="password" id="2" placeholder='Password' required />
//         //                             <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
//         //                             <label className={`ps-2 text-light ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept terms and conditions</label>
//         //                             <input
//         //                                 disabled={!agree}
//         //                                 className='btn btn-danger  w-50 mx-auto d-block my-2 '
//         //                                 type="submit"
//         //                                 value="Register" />
//         //                         </form>
//         //                         <p className="text-light">Already have an account? <Link to='/login ' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
//         //                         <button onClick={() => signInWithGoogle()} className="btn btn-success">Continue With Google</button>


//         //                     </div>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </div>

//         <div className='container '>
//             <div className="card m-3 border-0" >
//                 <div className="row g-0">
//                     <div className="col-md-6">
//                         <img src="" className="img-fluid rounded-start" alt="..." />
//                     </div>



//                     <div className="col-md-6 bg-dark border justify-content-center ">
//                         <div className='rounded-5 m-4' >
//                             <div className="register-form  ">
//                                 <h2 className="m-4 text-danger" style={{ textAlign: 'center' }}>Please Register</h2>
//                                 <form onSubmit={handleRegister}>
//                                     <input type="text" name='displayName' placeholder='Your Name' />
//                                     <input type="email" name="email" id="1" placeholder='Email Address' required />
//                                     <input type="password" name="password" id="2" placeholder='Password' required />
//                                     <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
//                                     <label className={`ps-2 text-light ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept terms and conditions</label>
//                                     <input
//                                         disabled={!agree}
//                                         className='btn btn-danger  w-50 mx-auto d-block my-2 '
//                                         type="submit"
//                                         value="Register" />

//                                 </form>
//                                 <p className="text-light">Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' >Login</Link></p>
//                                 <button onClick={() => signInWithGoogle()} className="btn btn-success">Continue With Google</button>


//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>


//     );
// };
// export default Register;

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import "./Register.css";
import scolarbanner from "../../../1_images/8_donate_page/1_donate_home.jpg";
import bsml from "../../../1_images/1_home/2_bsml-txt.png"

import useToken from '../../../hooks/useToken';
import { useForm } from 'react-hook-form';
import { sendEmailVerification } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';

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
    // const [token] = useToken(user || gUser); // token
    console.log(user)
    const navigate = useNavigate();


    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


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


    // if (token) {
    //     // navigate('/home');
    //     navigate(from, { replace: true });

    // }


    const handleRegister = async (event) => {
        event.preventDefault();
        const displayName = event.target.displayName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName });
        // verifyEmail();
        // toast.success('Please Verfify Your Email address before Login')
        console.log('Updated profile');
        console.log(event)
        navigate('/')



    }

    // const verifyEmail = () => {
    //     sendEmailVerification(auth.currentUser)
    //         .then(() => {
    //             console.log('Email Verification Sent');
    //         })
    // }

    // const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // const { register, formState: { errors }, handleSubmit } = useForm();
    // const [agree, setAgree] = useState(false);
    // let errorElement;
    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // const [updateProfile, updating, updateError] = useUpdateProfile(auth);




    // //user info save krbo
    // const [token] = useToken(user || gUser); // token
    // console.log(user)
    // const navigate = useNavigate();

    // let signInError;
    // if (error || gError || updating) {
    //     signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small> </p>
    // }



    // const navigateLogin = () => {
    //     navigate('/login')
    // }




    // if (loading || gLoading || updating) {
    //     return <Loading></Loading>
    // }


    // if (token) {
    //     navigate('/home');
    // }


    // const handleRegister = async (event) => {
    //     event.preventDefault();
    //     const displayName = event.target.displayName.value;
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     // const agree = event.target.terms.checked;
    //     await createUserWithEmailAndPassword(email, password)
    //     await updateProfile({ displayName });
    //     console.log('Updated profile');
    //     console.log(event)
    //     navigate('/home')
    //     verifyEmail()


    // }

    // const verifyEmail = () => {
    //     sendEmailVerification(auth.currentUser)
    //         .then(() => {
    //             alert('please check your email and verify')
    //         })
    // }




    return (
        <div className='text-white text-start ' style={{
            backgroundImage: `url(${scolarbanner})`, backgroundRepeat: 'no-repeat', height: "100vh", paddingTop: "5%",
        }}>
            <div className="container mx-auto " >
                <div className="row content justify-content-center ">

                    <div className="col-md-6 " id='sdw'>
                        <div className="mb-3 w-full pt-5 d-flex justify-content-center ">
                            <img className="" src={bsml} alt="" />
                        </div>
                        <h3 className="text-center mb-3"> Please Register Now!!</h3>

                        <form style={{ width: '80%', marginLeft: "10%", marginTop: "10%" }} onSubmit={handleRegister}>
                            <div className=" mb-3 ">

                                <input type="text" name="displayName" className="form-control" placeholder='Enter Your Full Name' required />
                            </div>
                            <div className=" mb-3 ">

                                <input type="email" name="email" className="form-control" placeholder='Enter your Email' required />
                            </div>
                            <div className=" mb-3">

                                <input type="password" name="password" className="form-control " placeholder='enter your password' required />
                            </div>
                            <div className=" mb-3 form-check">

                                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                                <label className={`ps-2 text-light ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept terms and conditions</label>
                            </div>
                            <input
                                disabled={!agree}
                                className='btn btn-danger  w-50 mx-auto d-block my-2 '
                                type="submit"
                                value="Register" />
                        </form>
                        <div style={{ width: '80%', marginLeft: "10%", marginTop: "10%", paddingBottom: "10%" }} >
                            {/* {errorElement} */}
                            <p className='text-light'>Already have an account? <Link to='/login' className='text-warning pe-auto text-decoration-none ' onClick={navigateLogin}>Please Login</Link></p>



                            <button onClick={() => signInWithGoogle()} className="btn btn-success ">Continue With Google</button>
                            {/* <SocialLogin></SocialLogin> */}
                            <ToastContainer />
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
        //                             <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        //                             <label className={`ps-2 text-light ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept terms and conditions</label>
        // <input
        //     disabled={!agree}
        //     className='btn btn-danger  w-50 mx-auto d-block my-2 '
        //     type="submit"
        //     value="Register" />

        //                         </form>
        //                         <p className="text-light">Already have an account? <Link to='/login ' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
        //                         <button onClick={() => signInWithGoogle()} className="btn btn-success">Continue With Google</button>


        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


    );
};
export default Register;