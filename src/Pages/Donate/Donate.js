import React from 'react';
import "./Donate.css";
import onelinee from "../../1_images/1_home/1_line.png"

import donatebanner from "../../../src/1_images/8_donate_page/1_donate_home.jpg";
import History from '../Home/History/History';
import Help from '../Home/Help/Help';
const Donate = () => {
    return (
        <div >


            <div className='home_banner'
                style={{
                    background: `url(${donatebanner}) `
                }}
                className="pb-5">

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
            <div>

                <Help></Help>
            </div>

        </div>


    );
};

export default Donate;