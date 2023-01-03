import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import donatebanner from '../../../1_images/8_donate_page/1_donate_home.jpg';
import onelinee from '../../../1_images/1_line.png';
import AllEvents from '../../../hooks/AllEvents';

const EventDetails = () => {


    const { id } = useParams();
    const [event, setEvent] = useState({});



    useEffect(() => {
        const url = `https://mosque-management-server.vercel.app/event/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setEvent(data));
    }, [id])



    const { name, img, short_description, date, time, location, orgBy, orgPhone, orgEmail } = event;
    return (
        <div>
            <div className='home_banner pb-5'
                style={{
                    background: `url(${donatebanner}) `
                }}
            >

                <h5 className="poppins text-center charity_campaing_heading pt-5 mt-">Charity Campaigns</h5>

                <div className="text-center pb-3">
                    <img src={onelinee} />
                </div>

                <div className="text-center when_things">
                    <p className="poppins donate_home_icon">
                        <a href="#">Home</a> / <span className="charity-text" >Charity Campaigns</span>
                    </p>
                </div>

            </div>
            <div className='container py-4'>
                <img className='img-fluid' src={img} alt="" />
                <div className='row md:px-4 py-4 orgSection '>
                    <div className="col-lg-8 text-start">
                        <h3>{name}</h3>
                        <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {location}</p>
                        <div >
                            {/* <p><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> {time}</p> */}
                            <Link to="/donate" className=" btn btn-warning px-2 mb-2" href="#" role="button">Donate Now</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 text-start">
                        <h4>ORGANIZER:</h4>
                        <div className=' text-orange'>
                            <b>By:</b> {orgBy} <br />
                            <b>Phone:</b> {orgPhone} <br />
                            <b>Email:</b> {orgEmail} <br />
                            <b>Date:</b> {date} <br />

                        </div>
                    </div>
                </div>
                <div className='text-start'>
                    <p>{short_description}</p>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;