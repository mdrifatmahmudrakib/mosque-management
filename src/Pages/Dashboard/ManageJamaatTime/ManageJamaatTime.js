import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import SingleJamaatTime from './SingleJamaatTime';

const ManageJamaatTime = () => {

    // const [jamaat, setJamaat] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/jamaattime')
    //         .then(res => res.json())
    //         .then(data => setJamaat(data))
    // }, [jamaat, setJamaat])

    // const { id } = useParams();
    // const navigate = useNavigate();


    // let navigate = useNavigate();


    // const {
    //     data: jamaattime = [],
    //     isLoading,

    // } = useQuery({
    //     queryKey: ["jamaattime"],
    //     queryFn: async () => {
    //         try {
    //             const res = await fetch(
    //                 "http://localhost:5000/jamaattime",
    //                 {
    //                     // headers: {
    //                     //   authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //                     // },
    //                 }
    //             );
    //             const data = await res.json();
    //             return data;
    //         } catch (error) { }
    //     },
    // });



    const [jamaattime, setJamaattime] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/jamaattime')
            .then(res => res.json())
            .then(data => setJamaattime(data))
    }, [jamaattime, setJamaattime])






    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (



        <>


            <section className="content-main " style={{ maxWidth: "1200px" }}>
                {
                    jamaattime?.map(jamaat => <SingleJamaatTime
                        key={jamaat._id}
                        jamaat={jamaat}
                    >
                    </SingleJamaatTime>

                    )
                }
            </section>


            {/* {
                jamaattime.map((jamaat) => <p>{jamaat.fajr} </p>



                )
            } */}
        </>



    );
};

export default ManageJamaatTime;