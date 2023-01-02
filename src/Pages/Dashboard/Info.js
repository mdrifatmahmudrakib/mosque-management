import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import "../../Pages/Dashboard/Info.css"
import UserDonation from '../UserDonation/UserDonation';
const Info = () => {
    const [user] = useAuthState(auth);
    console.log(user)

    const [userInfo, setuserInfo] = useState({});



    useEffect(() => {
        fetch(`https://mosque-management-server.vercel.app/puser/${user?.email}`)
            .then((res) => res.json())
            .then((result) => {
                setuserInfo(result);
                console.log(result);
            });
    }, [user?.email]);



    return (


        <div className="container profilebody">
            <div className="userbody">

                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={userInfo?.profilelink || "https://bootdey.com/img/Content/avatar/avatar7.png"} alt="photo" className="rounded-circle" width="150" />

                                    {/* <img src={"https://bootdey.com/img/Content/avatar/avatar7.png"} alt="Admin" className="rounded-circle" width="150" /> */}
                                    {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" /> */}
                                    <div className="mt-3">
                                        <h4> {user ? user?.displayName : "name"}</h4>

                                        <p> {userInfo?.about}</p>


                                    </div>
                                    <div>
                                        <a href={userInfo?.link} className="service_read_more_btn p-2 m-1 social_media_icon rounded-3 text-black">
                                            Social link <FontAwesomeIcon icon={faLink} className="icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user ? user?.displayName : "name"}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user ? user?.email : "xxxxxxxx@example.com"}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {userInfo?.phone}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Date of Birth</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {userInfo?.birth}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Gender</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {userInfo?.gender}
                                    </div>
                                </div>


                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">

                                        {userInfo?.street} ,  {userInfo?.state} ,  {userInfo?.city} ,  {userInfo?.zip}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-12">
                                        <Link className="btn btn-warning " target="__blank" to={`/dashboard/updateprofile/${user?.email}`} > Edit</Link>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>

            </div>
            <UserDonation></UserDonation>
        </div>
    );
};

export default Info;