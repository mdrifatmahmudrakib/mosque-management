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
        fetch(`http://localhost:5000/puser/${user?.email}`)
            .then((res) => res.json())
            .then((result) => {
                setuserInfo(result);
                console.log(result);
            });
    }, [user?.email]);



    return (


        <div class="container profilebody">
            <div class="userbody">

                <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src={userInfo?.profilelink} alt="Admin" class="rounded-circle" width="150" />

                                    {/* <img src={"https://bootdey.com/img/Content/avatar/avatar7.png"} alt="Admin" class="rounded-circle" width="150" /> */}
                                    {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" /> */}
                                    <div class="mt-3">
                                        <h4> {user ? user?.displayName : "name"}</h4>

                                        <p> {userInfo?.about}</p>


                                    </div>
                                    <div>
                                        <a href={userInfo?.link} class="service_read_more_btn p-2 m-1 social_media_icon rounded-3 text-black">
                                            Social link <FontAwesomeIcon icon={faLink} className="icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Full Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {user ? user?.displayName : "name"}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {user ? user?.email : "xxxxxxxx@example.com"}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Phone</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {userInfo?.phone}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Date of Birth</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {userInfo?.birth}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Gender</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {userInfo?.gender}
                                    </div>
                                </div>


                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Address</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">

                                        {userInfo?.street} ,  {userInfo?.state} ,  {userInfo?.city} ,  {userInfo?.zip}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-12">
                                        <Link class="btn btn-info " target="__blank" to={`/dashboard/updateprofile/${user?.email}`} > Edit</Link>
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