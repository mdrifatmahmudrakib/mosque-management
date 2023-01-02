import React from 'react';
import Team from '../Home/Team/Team';
import onelinee from "../../1_images/1_home/1_line.png"
import scolarbanner from "../../1_images/8_donate_page/1_donate_home.jpg";

const Scolar = () => {
    return (
        <div>
            <div className='home_banner'
                style={{
                    background: `url(${scolarbanner}) `
                }}
                className="pb-5">

                <h5 className="poppins text-center charity_campaing_heading pt-5 mt-">Islamic Scholars</h5>

                <div className="text-center pb-3">
                    <img src={onelinee} />
                </div>

                <div className="text-center when_things">
                    <p className="poppins donate_home_icon">
                        <a href="#">Home</a> / <span className="charity-text" >Islamic Scholars</span>
                    </p>
                </div>

            </div>

            <div>
                <Team></Team>
            </div>
        </div>
    );
};

export default Scolar;