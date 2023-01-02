import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight, faQuran, faMosque, faHands, faHand, faHandsHelping, faLightbulb, faStar, faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';
import "./Service.css"
{/* <FontAwesomeIcon icon={faLongArrowRight} /></a> */ }
const Service = () => {
    return (



        <section className="container pt-5 pb-5">

            <div className="mini_title">
                <p className="text-center">Our Services</p>
            </div>

            <div className="text-center">
                <h5 className="main_heading">Servicing Humanity</h5>
            </div>

            <div className="d-flex justify-content-center mt-4">
                <div className="heading_line"></div>
            </div>

            <div className="row mt-5 d-flex justify-content-center text-center poppins">

                {/* <!-- 1st card --> */}
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mt-0 mt-md-3 mt-lg-0 mt-xl-0">

                    <div className="col-12 card_shadow pt-5 pb-5 ps-3 pe-3 service_card">

                        <FontAwesomeIcon icon={faQuran} className="service_icon " />
                        <h5 className="service_heading mt-4">Quran Learning</h5>
                        <p className="service_body mt-3">
                            Learning Quran facility dolor sit amet, consectetur adipisicing elit, sed do eiu
                        </p>
                        <a href="/khutba" className="service_read_more_btn ">Read More
                            <FontAwesomeIcon icon={faLongArrowRight} className="ml-2" /></a>

                    </div>

                </div>

                {/* <!-- 2nd card --> */}
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mt-3 mt-md-3 mt-lg-0 mt-xl-0">

                    <div className="col-12 card_shadow pt-5 pb-5 ps-3 pe-3 service_card">
                        <i className="fal fa-quran service_icon"></i>
                        <FontAwesomeIcon icon={faStarAndCrescent} className="service_icon " />
                        <h5 className="service_heading mt-4">Funeral Service</h5>
                        <p className="service_body mt-3">
                            Funeral facility dolor sit amet, consectetur adipisicing elit, sed do eiusmod te
                        </p>
                        <a href="/events" className="service_read_more_btn ">Read More
                            <FontAwesomeIcon icon={faLongArrowRight} /></a>
                    </div>

                </div>

                {/* <!-- 3rd card --> */}
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mt-3 mt-md-3 mt-lg-0 mt-xl-0">

                    <div className="col-12 card_shadow pt-5 pb-5 ps-3 pe-3 service_card">
                        <i className="fal fa-mosque service_icon"></i>
                        <FontAwesomeIcon icon={faMosque} className="service_icon " />
                        <h5 className="service_heading mt-4">Mosque Renovation</h5>
                        <p className="service_body mt-3">
                            Mosque rebuild facility dol sit amet, consectetur adipisicing elit, sed do eiusm
                        </p>
                        <a href="/donate" className="service_read_more_btn">Read More
                            <FontAwesomeIcon icon={faLongArrowRight} />
                        </a>
                    </div>

                </div>

                {/* <!-- 4th card --> */}
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mt-3 mt-md-3 mt-lg-0 mt-xl-0">

                    <div className="col-12 card_shadow pt-5 pb-5 ps-3 pe-3 service_card">
                        <i className="fal fa-hands-helping service_icon"></i>
                        <FontAwesomeIcon icon={faHandsHelping} className="service_icon " />
                        <h5 className="service_heading mt-4">Help Poor</h5>
                        <p className="service_body mt-3">
                            Poor rehab facility dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        </p>
                        <a href="/donate" className="service_read_more_btn">Read More
                            <FontAwesomeIcon icon={faLongArrowRight} />

                        </a>
                    </div>

                </div>


            </div>
        </section >

        // <!--____________ services section ends _____________-->


    );
};

export default Service;