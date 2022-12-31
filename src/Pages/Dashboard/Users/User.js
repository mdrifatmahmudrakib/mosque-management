



import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import UserRow from './UserRow';

const User = () => {


    // const { data } = useQuery('users', () => fetch('http://localhost:5000/user', {
    //     method: 'GET',
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()));

    // // if (isLoading) {
    // //     return <Loading> </Loading>
    // // }

    // ***********now working*************
    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/user', {
    //         method: 'GET',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setUsers(data));

    // }, [users, setUsers])

    // ********************************XXXXX***********
    const [user, loading] = useAuthState(auth);

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));



    if (loading || isLoading) {
        return <Loading></Loading>
    }
    return (

        <div class="overflow-x-auto">

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