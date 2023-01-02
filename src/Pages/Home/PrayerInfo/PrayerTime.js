
import React, { useEffect, useState } from 'react';
import {
    Coordinates,
    CalculationMethod,
    PrayerTimes,
    SunnahTimes,
    Prayer,
    Qibla
} from "adhan";
import "./PrayerTime.css"
import moment from "moment-timezone";

const PrayerTime = () => {

    const coordinates = new Coordinates(23.8759, 90.3795);
    const params = CalculationMethod.MoonsightingCommittee();
    const date = new Date();
    const prayerTimes = new PrayerTimes(coordinates, date, params);
    const sunnahTimes = new SunnahTimes(prayerTimes);

    const moment = require('moment-hijri');

    function prayerName(prayer: Prayer) {
        if (prayer === Prayer.Fajr) {
            return "Fajr";
        } else if (prayer === Prayer.Sunrise) {
            return "Sunrise";
        } else if (prayer === Prayer.Dhuhr) {
            return "Dhuhr";
        } else if (prayer === Prayer.Asr) {
            return "Asr";
        } else if (prayer === Prayer.Maghrib) {
            return "Maghrib";
        } else if (prayer === Prayer.Isha) {
            return "Isha";
        } else if (prayer === Prayer.None) {
            return "None";
        }
    }



    const [jamaattime, setJamaattime] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/jamaattime')
            .then(res => res.json())
            .then(data => setJamaattime(data))
    }, [jamaattime, setJamaattime])





    return (
        <div className="col-12 col-md-12 col-lg-3 col-xl-3 mt-5 mt-md-5 mt-lg-0 mt-xl-0 ">
            <div>
                <div className="">
                    <h5 className="main_heading"><span style={{ color: "#2A486C" }}>Prayer</span> Waqt and Jamaat</h5>
                    <p>Prayer times for {moment(date).format("MMMM DD, YYYY")}</p>
                </div>

                <div className="mt-4">
                    <div className="heading_line card-heading-div"  ></div>
                </div>
            </div>

            <div>

                {
                    jamaattime.map(jamaat =>


                        <table key={jamaat._id} className="table table-hover mt-5 justify-content-center">
                            <thead>
                                <tr className="prayer_time_table_heading">
                                    <th scope="col">Salat</th>
                                    <th scope="col">Waqt Start</th>
                                    <th scope="col" >Jamaat Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="salat_color">Fajr</td>
                                    {/* <td className="slat_time">12:27 AM</td> */}
                                    <td className="slat_time">{moment(prayerTimes.fajr).format(" h:mm A")}</td>
                                    {/* <td className="slat_time">{jamaat.fajr}</td> */}


                                    <input
                                        className='text-2 border border-0 slat_time'
                                        type="time"
                                        value={jamaat.fajr}
                                        disabled
                                    />



                                </tr>
                                <tr>
                                    <td className="salat_color">Zuhr</td>
                                    <td className="slat_time">{moment(prayerTimes.dhuhr).format(" h:mm A")}</td>
                                    {/* <td className="slat_time">{jamaat.zuhr}</td> */}
                                    <input
                                        className='text-2 border border-0 slat_time'
                                        type="time"
                                        value={jamaat.zuhr}
                                        disabled
                                    />


                                </tr>
                                <tr>
                                    <td className="salat_color">Asr</td>
                                    <td className="slat_time">{moment(prayerTimes.asr).format(" h:mm A")}</td>
                                    {/* <td className="slat_time">{jamaat.asr}</td> */}

                                    <input
                                        className='text-2 border border-0 slat_time'
                                        type="time"
                                        value={jamaat.asr}
                                        disabled
                                    />



                                </tr>
                                <tr>
                                    <td className="salat_color">Magrib</td>
                                    <td className="slat_time">{moment(prayerTimes.maghrib).format(" h:mm A")}</td>
                                    {/* <td className="text-end slat_time">12:27 AM</td> */}

                                    {/* <td className="slat_time">{jamaat.magrib}</td> */}
                                    <input
                                        className='text-2 border border-0 slat_time'
                                        type="time"
                                        value={jamaat.magrib}
                                        disabled
                                    />


                                </tr>
                                <tr>
                                    <td className="salat_color">Isha</td>
                                    <td className="slat_time">{moment(prayerTimes.isha).format(" h:mm A")}</td>
                                    {/* <td className="text-end slat_time">12:27 AM</td> */}
                                    {/* <td className="slat_time" type="time">{jamaat.isha} </td> */}
                                    <input
                                        className='text-2 border border-0 slat_time'
                                        type="time"
                                        value={jamaat.isha}
                                        disabled
                                    />


                                </tr>
                                {/* <tr>
            <td className="salat_color">Jumah</td>
            <td className="slat_time">12:27 AM</td>
            <td className="text-end slat_time">12:27 AM</td>
        </tr> */}
                            </tbody>
                        </table>)
                }





            </div>

            <div className="bg-light ps-5 pe-5 pt-4 pb-3">
                <p className="text-center event_location">Location: London, UK</p>
                <p className="text-center event_regular_date">{moment(date).format("MMMM DD, YYYY")}</p>
                <p className="text-center evente_arabic_date">(21th Shawwal, 1443)</p>
                <p className="text-center evente_arabic_date"> {moment().format('iYYYY/iM/iD')}</p>


            </div>


        </div>
    );
};

export default PrayerTime;