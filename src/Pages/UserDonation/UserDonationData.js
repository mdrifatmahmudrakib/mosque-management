import React from 'react';

const UserDonationData = ({ donate, i }) => {
    return (

        <tr key={donate._id} className="table">
            <td>
                <p>{i + 1}</p>

            </td>
            <td>
                <p>{donate.campaignname}</p>

            </td>
            {/* <td>{donate.telEmail}</td> */}
            <td>{donate.amount}</td>
            <td>{donate.transactionId}</td>

            <td>{donate.paidAt}</td>



        </tr>

    );
};

export default UserDonationData;