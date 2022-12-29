import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const ManageKhutba = () => {

    const {
        data: allKhutba = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["allKhutba"],
        queryFn: async () => {
            try {
                const res = await fetch(
                    "http://localhost:5000/allKhutba",
                    {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                    }
                );
                const data = await res.json();
                return data;
            } catch (error) { }
        },
    });





    const handleDeleteKhutba = (khutba) => {
        console.log(khutba);

        fetch(
            `http://localhost:5000/allKhutba/${khutba._id}`,
            {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`${khutba.name} deleted successfully`);

                }

            });
    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div >




            <div >
                <div>
                    <table className=' mx-auto table table-striped shadow m-4 p-4'>
                        <thead>
                            <tr className='bg-dark text-white'>
                                <th scope="col">SL.</th>
                                <th scope="col">About</th>
                                <th scope="col">Speakers</th>
                                <th scope="col">Date</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allKhutba.map((khutba, i) => <tr key={khutba._id} class="table">



                                    <th scope="row">{i + 1}</th>
                                    <td>
                                        <p>{khutba.about}</p>


                                    </td>
                                    <td>{khutba.speaker}</td>
                                    <td>{khutba.month}</td>
                                    <td><button className='btn btn-warning' onClick={() => handleDeleteKhutba(khutba)}>Delete</button></td>



                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    );
};

export default ManageKhutba;