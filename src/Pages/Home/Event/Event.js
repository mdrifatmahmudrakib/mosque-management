import React, { useEffect, useState } from 'react';
import AllEvents from '../../../hooks/AllEvents';
import PrayerTime from '../PrayerInfo/PrayerTime';
// import divbanner from "../../../1_images/5_events/1_events.jpg";
import "./Event.css"
import SingleEvent from './SingleEvent';

import onelinee from "../../../1_images/1_home/1_line.png"

import donatebanner from "../../../1_images/8_donate_page/1_donate_home.jpg";
import Title from '../../../hooks/Title';

const Event = () => {

    const [events] = AllEvents()
    Title("Events");
    return (





        <div className='ml-4 mr-4 event-bg'>


            <div className='home_banner pb-5'
                style={{
                    background: `url(${donatebanner}) `
                }}
            >

                <h5 className="poppins text-center charity_campaing_heading pt-5 mt-">Upcoming Events</h5>

                <div className="text-center pb-3">
                    <img src={onelinee} />
                </div>

                <div className="text-center when_things">
                    <p className="poppins donate_home_icon">
                        <a href="#">Home</a> / <span className="charity-text" >Upcoming Events</span>
                    </p>
                </div>

            </div>
            <div>






                {/* //TEST */}
                <div>
                    <section className="container pt-5 pb-5 poppins">

                        <div className="mini_title">
                            <p className="text-center">Need Help For Help</p>
                        </div>

                        <div className="text-center">
                            <h5 className="main_heading">Our Causes</h5>
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            <div className="heading_line"></div>
                        </div>

                        <div className="mt-3">
                            <p className="text-center help_section_body_text">
                                Join hands with us to accomplish all these projects of serving humanity and <br></br> making this world a
                                better place to live.
                            </p>

                            <div className="row pt-3">
                                {
                                    events.map(event => <SingleEvent
                                        key={event._id}
                                        event={event}
                                    ></SingleEvent>)
                                }





                            </div>
                        </div>

                    </section>
                </div>




            </div>

        </div>
    );
};

export default Event;