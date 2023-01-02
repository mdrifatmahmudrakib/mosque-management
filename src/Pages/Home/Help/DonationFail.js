import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DonationFail = () => {
    const navigate = useNavigate();
    return (
        <div className='pt-5'>
            <div className='container mx-auto text-center'>
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/failed-payment-3026855-2520202.png" alt="" />
                <h2 className='text-danger '>Something went Wrong!!</h2>
                <button className='btn btn-danger px-4 ' onClick={() => navigate("/")}>Go back</button>
            </div>
        </div>
    );
};

export default DonationFail;