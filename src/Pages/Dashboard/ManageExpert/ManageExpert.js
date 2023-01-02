import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from "../../Shared/Loading/Loading"
import ModifyTable from "./ModifyTable"
import onelinee from "../../../1_images/1_home/1_line.png"

import donatebanner from "../../../1_images/8_donate_page/1_donate_home.jpg";
import { Link } from 'react-router-dom';
const ManageExpert = () => {

    const {
        data: allExperts = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["allExperts"],
        queryFn: async () => {
            try {
                const res = await fetch(
                    "http://localhost:5000/experts",
                    {
                        // headers: {
                        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        // },
                    }
                );
                const data = await res.json();
                return data;
            } catch (error) { }
        },
    });

    const handleDeleteExpert = (expert) => {
        console.log(expert);

        fetch(
            `http://localhost:5000/experts/${expert._id}`,
            {
                method: "DELETE",
                // headers: {
                //   authorization: `Bearer ${localStorage.getItem('accessToken')}`
                // },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`${expert.name} deleted successfully`);

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

                <h5 className="poppins text-center charity_campaing_heading pt-5 mt-">Manage Expert</h5>

                <div className="text-center pb-3">
                    <img src={onelinee} alt="photo" />
                </div>

                <div className="text-center when_things">
                    <p className="poppins donate_home_icon">
                        <a href="#">Home</a> / <span className="charity-text" >Manage Expert</span>
                    </p>
                </div>

            </div>


            <div className='pt-2 d-flex justify-content-end' >
                <Link to="/dashboard/addscolar" className="btn btn-primary">
                    Add Expert
                </Link>
            </div>

            <div >
                <div>
                    <table className=' mx-auto table table-striped shadow m-4 p-4'>
                        <thead>
                            <tr className='bg-dark text-white'>
                                <th scope="col">SL.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Role</th>
                                <th scope="col">Update</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allExperts.map((experts, i) => <ModifyTable experts={experts} handleDeleteExpert={handleDeleteExpert} i={i}></ModifyTable>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    );
};

export default ManageExpert;