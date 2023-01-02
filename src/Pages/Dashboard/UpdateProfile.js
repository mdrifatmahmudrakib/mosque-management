import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

import "../Dashboard/UpdateProfile.css"
import Loading from '../Shared/Loading/Loading';
import UpdateSingleProfile from './UpdateSingleProfile';
const UpdateProfile = () => {
    // const [UpdateExpert, setUpdateExpert] = useState({});

    const [user, loading] = useAuthState(auth);
    console.log(user)


    const [UpdateExpert, setUpdateExpert] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/puser/${user?.email}`)
            .then((res) => res.json())
            .then((result) => {
                setUpdateExpert(result);
                console.log(result);
            });
    }, [user?.email]);



    const handleUpdateEvent = (event) => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const about = form.about.value;
        const birth = form.birth.value;
        const link = form.link.value;
        const profilelink = form.profilelink.value;
        const gender = form.gender.value;
        const street = form.street.value;
        const city = form.city.value;
        const state = form.state.value;
        const zip = form.zip.value;





        const newEvent = {
            phone,
            link,
            profilelink,
            birth,
            about,
            gender,
            street,
            city,
            state,
            zip



        };
        fetch(`http://localhost:5000/puser/${user?.email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                // reset();
                toast.success("Campaign Update Successfully");
            })
    };







    if (loading) {
        <Loading></Loading>
    }



    return (
        <div className="">

            <form onSubmit={handleUpdateEvent}>
                <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="account-settings">
                                    <div className="user-profile">
                                        <div className="user-avatar">
                                            <img src={UpdateExpert?.profilelink || "https://bootdey.com/img/Content/avatar/avatar7.png"} alt="profile" />
                                            {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" /> */}
                                        </div>
                                        <h5 className="user-name">{user ? user?.displayName : "name"} </h5>
                                        <h6 className="user-email">{user ? user?.email : "xxxxxxxx@example.com"}</h6>
                                    </div>
                                    <div className="about">
                                        <h5>About</h5>
                                        <p>{UpdateExpert?.about}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-2 text-primary">Personal Details</h6>
                                    </div>
                                    <div className="form-group">
                                        <label for="fullName">About</label>
                                        <textarea rows="5"
                                            type="text"
                                            className="form-control "
                                            id="fullName"
                                            placeholder="Enter full name"
                                            defaultValue={UpdateExpert?.about}
                                            maxlength="200"
                                            name='about'
                                        />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="website">Update Profile Photo</label>
                                            <input
                                                type="url"
                                                name="profilelink"
                                                defaultValue={UpdateExpert?.profilelink}
                                                className="form-control"
                                                id="website"
                                                placeholder="Add Social Link" />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="eMail">Date of Birth</label>
                                            <input
                                                type="date"
                                                defaultValue={UpdateExpert?.birth}

                                                name='birth'
                                                className="form-control" id="eMail" />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="phone">Phone</label>
                                            <input


                                                defaultValue={UpdateExpert?.phone}
                                                name='phone'
                                                type="number"
                                                className="form-control"
                                                id="phone"
                                                placeholder="Enter phone number" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="website">Social Link</label>
                                            <input
                                                type="url"
                                                name="link"
                                                defaultValue={UpdateExpert?.link}
                                                className="form-control"
                                                id="website"
                                                placeholder="Add Social Link" />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div  >

                                            <label for="gender">Choose Gender:</label>

                                        </div>
                                        <select defaultValue={UpdateExpert?.gender} name="gender" id="gender">
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>

                                        </select>
                                    </div>

                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mt-3 mb-2 text-primary">Address</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="Street">Street</label>
                                            <input
                                                name="street"
                                                defaultValue={UpdateExpert?.street}
                                                type="text"
                                                className="form-control"
                                                id="Street" placeholder="Enter Street" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="ciTy">City</label>
                                            <input
                                                name="city"
                                                defaultValue={UpdateExpert?.city}
                                                type="text"
                                                className="form-control" id="ciTy" placeholder="Enter City" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="sTate">State</label>
                                            <input
                                                name="state"
                                                defaultValue={UpdateExpert?.state}
                                                type="text" className="form-control" id="sTate" placeholder="Enter State" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="zIp">Zip Code</label>
                                            <input
                                                name="zip"
                                                defaultValue={UpdateExpert?.zip}
                                                type="text"
                                                className="form-control" id="zIp" placeholder="Zip Code" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text-right p-2">

                                            <button className="btn btn-primary">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>




        </div>
    );
};

export default UpdateProfile;