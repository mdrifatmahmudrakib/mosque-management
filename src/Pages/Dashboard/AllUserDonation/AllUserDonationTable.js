import React from 'react';

const AllUserDonationTable = ({ donation, i }) => {
    return (


        <tr key={donation._id} className="table">




            <td>
                <p>{i + 1}</p>


            </td>

            <td>
                <p>{donation.campaignname}</p>


            </td>
            <td>{donation.name}</td>
            <td>{donation.telEmail}</td>
            <td>{donation.amount}</td>
            <td>{donation.paidAt}</td>



        </tr>

    );
};

export default AllUserDonationTable;