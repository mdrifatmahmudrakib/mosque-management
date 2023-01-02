import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

import Loading from '../../Shared/Loading/Loading';
import onelinee from "../../../1_images/1_home/1_line.png"

import donatebanner from "../../../1_images/8_donate_page/1_donate_home.jpg";
import { Link } from 'react-router-dom';
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

            <div className='home_banner pb-5'
                style={{
                    background: `url(${donatebanner}) `
                }}
            >

                <h5 className="poppins text-center charity_campaing_heading pt-5 mt-">Manage Khutba</h5>

                <div className="text-center pb-3">
                    <img src={onelinee} />
                </div>

                <div className="text-center when_things">
                    <p className="poppins donate_home_icon">
                        <Link to="/">Home</Link> / <Link to="/khutba"><span className="charity-text" >Khutba</span></Link>
                    </p>
                </div>

            </div>

            <div className='pt-2 d-flex justify-content-end' >
                <Link to="/dashboard/addkhutba" className="btn btn-primary">
                    Create Khutba
                </Link>
            </div>

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
                                allKhutba.map((khutba, i) => <tr key={khutba._id} className="table">



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