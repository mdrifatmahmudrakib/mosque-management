import React from 'react';
import AllEvents from '../../../hooks/AllEvents';
import PrayerTime from '../PrayerInfo/PrayerTime';
import SingleEvent from './SingleEvent';

const HomeEvent = () => {
    const [events] = AllEvents()
    return (
        <section class="container-fluid pt-5 pb-5 poppins event-bg"  >

            <div class="row pt-5 pb-5 ps-0 ps-md-0 ps-lg-5 ">

                <div class="col-12 col-md-12 col-lg-8 col-xl-8 ps-8">

                    <div>
                        <div class="">
                            <h5 class="main_heading text-start"><span style={{ color: "#2A486C" }}>Upcoming</span> Events</h5>
                        </div>

                        <div class="mt-4">
                            <div class="heading_line card-event" ></div>
                        </div>
                    </div>



                    <div class="row mt-5 d-flex justify-content-center">

                        {
                            events.slice(0, 2).map(event => <SingleEvent
                                key={event._id}
                                event={event}
                            ></SingleEvent>)
                        }


                    </div>

                </div>



                {/* <!-- 2nd card-- > */}
                <PrayerTime></PrayerTime>

            </div >
            <div>

            </div>
        </section >
    );
};

export default HomeEvent;