import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, i }) => {

    const [users, setUsers] = useState([]);
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
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
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = `http://localhost:5000/user/${email}`;
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
        // <tr>
        //     <th>1</th>
        //     <td>{email}</td>
        //     <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-success">Make Admin</button>}</td>
        //     {/* <td><button onClick={makeAdmin} class="btn btn-success">Make Admin</button></td> */}
        //     <td><button class="btn btn-danger" onClick={() => handleDelete(user._id)}>Remove User</button></td>
        // </tr>


        <tr class="table">



            <th scope="row">{i + 1}</th>
            <td>
                <p>{email}</p>


            </td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-success">Make Admin</button>}</td>
            <td><button class="btn btn-danger" onClick={() => handleDelete(user._id)}>Remove User</button></td>




        </tr>

    );
};

export default UserRow;