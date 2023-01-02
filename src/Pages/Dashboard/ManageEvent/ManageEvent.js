import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AllEvents from '../../../hooks/AllEvents';
import { Link } from 'react-router-dom';
import ManageSingleEvent from './ManageSingleEvent';
import onelinee from "../../../1_images/1_home/1_line.png"

import donatebanner from "../../../1_images/8_donate_page/1_donate_home.jpg";

const ManageEvent = () => {
    // const [events] = AllEvents();
    const [events, setEvents] = useState([])

    const [pageCount, setPageCount] = useState(0);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);


    useEffect(() => {
        fetch(`https://mosque-management-server.vercel.app/events?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [page, size]);



    useEffect(() => {
        fetch('https://mosque-management-server.vercel.app/campaignCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 2);
                setPageCount(pages);
            })
    }, [])

    return (
        <section className="">
            <div className="pb-5"
                style={{
                    background: `url(${donatebanner}) `
                }}
            >

                <h5 className="poppins text-center charity_campaing_heading pt-5 mt-">Manage Events</h5>

                <div className="text-center pb-3">
                    <img src={onelinee} />
                </div>

                <div className="text-center when_things">
                    <p className="poppins donate_home_icon">
                        <Link to="/">Home</Link> / <Link to="/events"><span className="charity-text" >Events</span></Link>
                    </p>
                </div>

            </div>

            <div className='pt-2 d-flex justify-content-end' >
                <Link to="/dashboard/addevent" className=" btn btn-warning">
                    Create Event
                </Link>
            </div>
            <div className="card mb-4 shadow-sm ">


                <div className="card-body">
                    <div className="row ">

                        {
                            events?.map(event => <ManageSingleEvent
                                key={event._id}
                                event={event}
                            ></ManageSingleEvent>)
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

export default ManageEvent;