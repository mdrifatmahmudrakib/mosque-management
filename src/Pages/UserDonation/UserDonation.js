import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UserDonationData from './UserDonationData';



const UserDonation = () => {
    const [user] = useAuthState(auth)
    console.log(user)

    const [donation, setDonation] = useState([]);
    useEffect(() => {
        fetch(`https://mosque-management-server.vercel.app/checkout/${user?.email}/true`)
            .then(res => res.json())
            .then(data => setDonation(data))
        console.log(setDonation);
        console.log(setDonation);
    }, [user?.email])
    return (
        <div>

            {
                donation.length < 1 ? (<> </>) : (


                    <table className=' container mx-auto table table-striped shadow m-4 p-4'>
                        <thead>
                            <tr className='bg-dark text-white'>

                                <th scope="col">SL</th>
                                <th scope="col">Campaign Name </th>
                                <th scope="col">Amount</th>
                                <th scope="col">Transaction Id</th>

                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donation.map((donate, i) => <UserDonationData i={i} key={donate._id} donate={donate}></UserDonationData>)}
                        </tbody>
                    </table>

                )






            }

        </div>
    );
};

export default UserDonation;