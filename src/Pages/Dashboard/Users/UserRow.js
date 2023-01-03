import React, { useState } from 'react';
import { toast } from 'react-hot-toast';


const UserRow = ({ user, refetch, i }) => {

    const [users, setUsers] = useState([]);
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://mosque-management-server.vercel.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }


    const handleDelete = id => {
        console.log(id);
        // const proceed = window.confirm('Are you Sure?');
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = `https://mosque-management-server.vercel.app/user/${email}`;
            fetch(url, {
                method: 'DELETE'
            })

                .then(response => response.json())
                .then(data => {

                    if (data.modifiedCount > 0) {
                        // refetch();

                        console.log(data);
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining);
                    }

                })
        }


    }


    return (



        <tr className="table">



            <th scope="row">{i + 1}</th>
            <td>
                <p>{email}</p>


            </td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-success">Make Admin</button>}</td>
            <td><button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Remove User</button></td>




        </tr>

    );
};

export default UserRow;