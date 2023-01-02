import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllCampaigns from '../../../hooks/AllCampaigns';
import SingleHelp from '../../Home/Help/SingleHelp';
import ManageSingleCampaign from './ManageSingleCampaign';
import "./ManageCampaign.css"

import onelinee from "../../../1_images/1_home/1_line.png"

import donatebanner from "../../../1_images/8_donate_page/1_donate_home.jpg";
const ManageCampaign = () => {
    // const [causes] = AllCampaigns();
    const [causes, setCauses] = useState([])
    const [pageCount, setPageCount] = useState(0);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);

    useEffect(() => {
        fetch(`http://localhost:5000/campaigns?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setCauses(data));
    }, [page, size]);


    useEffect(() => {
        fetch('http://localhost:5000/campaignCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 5);
                setPageCount(pages);
            })
    }, [])


    return (
        <section className="">
            <div className='home_banner'
                style={{
                    background: `url(${donatebanner}) `
                }}
                class="pb-5">

                <h5 class="poppins text-center charity_campaing_heading pt-5 mt-">Manage Campaign</h5>

                <div class="text-center pb-3">
                    <img src={onelinee} />
                </div>

                <div class="text-center when_things">
                    <p class="poppins donate_home_icon">
                        <Link to="/">Home</Link> / <Link to="/donate"><span class="charity-text" >Campaigns</span></Link>
                    </p>
                </div>

            </div>





            <div className='pt-2 d-flex justify-content-end' >
                <Link to="/dashboard/addcampaign" className="btn btn-primary">
                    Create Campaign
                </Link>
            </div>

            <div className="card mb-4 shadow-sm shadow-lg p-3 mb-5 bg-white rounded mt-4 ">



                <div className="card-body">
                    <div className="row ">

                        {
                            causes?.map(cause => <ManageSingleCampaign
                                key={cause._id}
                                // refetch={refetch}
                                cause={cause}
                            ></ManageSingleCampaign>)
                        }

                    </div>

                    <div className='pagination'>
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={page === number ? 'selected' : ''}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }

                        <select onChange={e => setSize(e.target.value)}>
                            <option value="5" selected>5</option>
                            <option value="10"  >10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default ManageCampaign;