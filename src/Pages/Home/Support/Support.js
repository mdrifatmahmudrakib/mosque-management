import React from 'react';
import "./Support.css";
import support from "../../../1_images/6_support-section/1_background-img.jpg";
const Support = () => {
    return (
        <div className="container-fluid support_section pt-5 pb-5 poppins" style={{
            background: `url(${support}) `


        }}>
            <div className="mini_title mt-5">
                <p className="text-center" style={{ color: '#D1AD3C' }}>Support Us</p>
            </div>

            <div className="text-center">
                <h5 className="main_heading" style={{ color: 'white' }}>We Need Your Help</h5>
            </div>

            <div className="d-flex justify-content-center mt-4">
                <div className="support_heading_line"></div>
            </div>

            <div className="mt-5">
                <p className="text-center help_section_body_text help-section"  >
                    People suffering from hunger amet, consectetur adipisicing elit, sed do eiusmod <br></br> tempor incididunt
                    ut labore pariatur located in Syria, Iraq and Kenya.
                </p>


                <div className="circle_body pt-4">
                    <div>
                        <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"
                            className='progress'>
                        </div>
                        <div className="text-center mt-2 circle_label">Mosque</div>
                    </div>

                    <div className="ps-5 pe-5 ">
                        <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"
                            className='progress'>
                        </div>
                        <div className="text-center mt-2 circle_label">Mosque</div>
                    </div>

                    <div>
                        <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"
                            className='progress'>
                        </div>
                        <div className="text-center mt-2 circle_label">Feed</div>
                    </div>

                </div>
                <div className="text-center mt-5 mb-5">
                    <a href="#" className="rounded-pill btn donate_now_btn ps-5 pe-5 pt-3 pb-3">Donate Now</a>
                </div>

            </div>

        </div>
    );
};

export default Support;