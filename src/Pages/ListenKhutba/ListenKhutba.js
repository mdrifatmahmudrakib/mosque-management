import React from 'react';
import { useQuery } from 'react-query';
import Footer from '../Shared/Footer/Footer';
import Loading from '../Shared/Loading/Loading';
import img from '../../1_images/11_audio-tilwat/1_audio-img2.jpg'


import onelinee from "../../1_images/1_home/1_line.png";

import scolarbanner from "../../1_images/8_donate_page/1_donate_home.jpg"
const ListenKhutba = () => {
    const {
        data: allKhutba = [],
        isLoading,

    } = useQuery({
        queryKey: ["allKhutba"],
        queryFn: async () => {
            try {
                const res = await fetch(
                    "http://localhost:5000/allKhutba",
                    {
                        // headers: {
                        //   authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        // },
                    }
                );
                const data = await res.json();
                return data;
            } catch (error) { }
        },
    });






    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div >
            <div
                className="home_banner pb-5"
                style={{
                    background: `url(${scolarbanner}) `,

                }}
            >
                <h5 className="poppins text-center charity_campaing_heading pt-5 mt-">
                    ListenKhutba
                </h5>

                <div className="text-center pb-3">
                    <img src={onelinee} alt='' />
                </div>

                <div className="text-center when_things">
                    <p className="poppins donate_home_icon">
                        <a href="/">Home</a> /{" "}
                        <span className="charity-text">ListenKhutba</span>
                    </p>
                </div>
            </div>
            <div className='container pt-4' >
                {
                    allKhutba.map(khutba =>
                        <div key={khutba._id} className=' mx-auto mb-5 m-2 shadow-lg'>
                            <div class="card">
                                <h5 class="card-header text-center">{khutba.about}</h5>

                                <div class="card-body">

                                    <div className='d-flex flex-lg-row gap-2 flex-column  align-items-center '>
                                        <div className='w-50 d-flex flex-column flex-md-row gap-2 flex-lg-row justify-content-evenly align-items-center'>
                                            <img src={img} alt='' style={{ width: '80px' }} />
                                            <div>
                                                <h5 class="card-title">{khutba.speaker}</h5>
                                                <p class="card-text">{khutba.month}</p>
                                            </div>
                                        </div>


                                        <div className='d-flex w-50 flex-column flex-md-row flex-lg-row gap-2 justify-content-evenly  align-items-center'>
                                            <audio className='bg-warning' controls >
                                                <source src={khutba.link} type="audio/mpeg" />
                                            </audio>

                                        </div>
                                    </div>


                                </div>

                            </div>



                        </div>)
                }
            </div>

            {/* <KhutbaContact></KhutbaContact> */}


        </div>

    );
};

export default ListenKhutba;