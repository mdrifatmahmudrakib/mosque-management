import React, { useEffect, useState } from 'react';
import AllEvents from '../../../hooks/AllEvents';
import PrayerTime from '../PrayerInfo/PrayerTime';
// import divbanner from "../../../1_images/5_events/1_events.jpg";
import "./Event.css"
import SingleEvent from './SingleEvent';

import onelinee from "../../../1_images/1_home/1_line.png"

import donatebanner from "../../../1_images/8_donate_page/1_donate_home.jpg";

const Event = () => {

    const [events] = AllEvents()

    return (





        <div className='ml-4 mr-4'>


            <div className='home_banner'
                style={{
                    background: `url(${donatebanner}) `
                }}
                class="pb-5">

                <h5 class="poppins text-center charity_campaing_heading pt-5 mt-">Upcoming Events</h5>

                <div class="text-center pb-3">
                    <img src={onelinee} />
                </div>

                <div class="text-center when_things">
                    <p class="poppins donate_home_icon">
                        <a href="#">Home</a> / <span class="charity-text" >Upcoming Events</span>
                    </p>
                </div>

            </div>
            <div>






                {/* //TEST */}
                <div>
                    <section class="container pt-5 pb-5 poppins">

                        <div class="mini_title">
                            <p class="text-center">Need Help For Help</p>
                        </div>

                        <div class="text-center">
                            <h5 class="main_heading">Our Causes</h5>
                        </div>

                        <div class="d-flex justify-content-center mt-4">
                            <div class="heading_line"></div>
                        </div>

                        <div class="mt-3">
                            <p class="text-center help_section_body_text">
                                Join hands with us to accomplish all these projects of serving humanity and <br></br> making this world a
                                better place to live.
                            </p>

                            <div class="row pt-3">
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