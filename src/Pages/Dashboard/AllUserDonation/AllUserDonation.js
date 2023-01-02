import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import AllUserDonationTable from './AllUserDonationTable';
import onelinee from "../../../1_images/1_home/1_line.png"

import donatebanner from "../../../1_images/8_donate_page/1_donate_home.jpg";
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';




const AllUserDonation = () => {
    const [user] = useAuthState(auth)
    console.log(user)

    const [allDonation, setAllDonation] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/checkout/true`)
            .then(res => res.json())
            .then(data => setAllDonation(data))
        console.log(setAllDonation);
    }, [user?.email])
    return (
        <div>
            <div className='home_banner pb-5'
                style={{
                    background: `url(${donatebanner}) `
                }}
            >

                <h5 className="poppins text-center charity_campaing_heading pt-5 mt-">All Donations</h5>

                <div className="text-center pb-3">
                    <img src={onelinee} />
                </div>

                <div className="text-center when_things">
                    <p className="poppins donate_home_icon">
                        <Link to='/'>Home</Link>
                    </p>
                </div>

            </div>

            <table className='  mx-auto table text-center table-striped shadow m-4 p-4'>
                <thead>
                    <tr className='bg-dark text-white'>

                        <th scope="col">SL</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Amount</th>
                        <th scope="col">PostCode</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {allDonation.map((donation, i) => <AllUserDonationTable key={donation._id} i={i} donation={donation}></AllUserDonationTable>)}
                </tbody>
            </table>


        </div>


    );
};

export default AllUserDonation;