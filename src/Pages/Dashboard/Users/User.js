



import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import UserRow from './UserRow';

import onelinee from "../../../1_images/1_home/1_line.png"

import donatebanner from "../../../1_images/8_donate_page/1_donate_home.jpg";

const User = () => {


    const [user, loading] = useAuthState(auth);

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://mosque-management-server.vercel.app/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));



    if (loading || isLoading) {
        return <Loading></Loading>
    }
    return (

        <div className="overflow-x-auto">
            <div className='home_banner pb-5'
                style={{
                    background: `url(${donatebanner}) `
                }}
            >

                <h5 className="poppins text-center charity_campaing_heading pt-5 mt-">Manage Users</h5>

                <div className="text-center pb-3">
                    <img src={onelinee} />
                </div>

                <div className="text-center when_things">
                    <p className="poppins donate_home_icon">
                        <Link to="/">Home</Link>
                    </p>
                </div>

            </div>
            {/* hello from {users.length} */}

            <table className=' mx-auto table table-striped shadow m-4 p-4'>
                {/* <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead> */}

                <thead>
                    <tr className='bg-dark text-white'>
                        <th scope="col">SL.</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Handle</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => <UserRow
                            i={i}
                            key={user._id}
                            user={user}
                            refetch={refetch}
                        ></UserRow>)
                    }


                </tbody>
            </table>
        </div >





    );
};

export default User;