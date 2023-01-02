import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const DonationSuccess = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transactionId = query.get("transactionId");
    console.log(transactionId)

    const [donation, setDonation] = useState({});
    useEffect(() => {
        fetch(`https://mosque-management-server.vercel.app/donation-info/by-transaction-id/${transactionId}`)
            .then(res => res.json())
            .then(data => setDonation(data));
    }, [transactionId])
    console.log(donation)
    if (!donation?._id) {
        return (
            <div>
                No donation found
            </div>
        )
    }

    return (
        <div className='container mx-auto pt-5'>
            <div className=' text-center'>
                <img className='w-25' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/payment-success-2156783-1811922.png" alt="" />
                <h2 className='text-success fw-bolder py-3'>Congrats! Successfully Donated.</h2>
                <Link className=' btn btn-success' to="/dashboard/profile">Go To Profile</Link>
            </div>

            <h2>Your Order Summary</h2>
            <div>
                <table className=' mx-auto table table-striped shadow m-4 p-4'>
                    <thead>
                        <tr className='bg-dark text-white'>


                            <th scope="col">Name</th>
                            <th scope="col">TransactionID</th>
                            <th scope="col">Amount</th>

                            <th scope="col">Address</th>
                            <th scope="col">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table">




                            <td>
                                <p>{donation.name}</p>



                            </td>
                            <td>{donation._id}</td>
                            <td>{donation.amount}</td>

                            <td>{donation.address}</td>
                            <td>{donation.paidAt}</td>





                        </tr>

                    </tbody>
                </table>
                <button className='btn btn-primary m-4 d-print-none' onClick={() => window.print()}>Print</button>
            </div>

        </div>
    );
};

export default DonationSuccess;