
import { faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';


const Scolar = () => {
    const [allScolar, setScolar] = useState([])
    useEffect(() => {
        fetch('https://mosque-management.onrender.com/experts/scolar')
            .then(res => res.json())
            .then(data => setScolar(data))
    }, [])




    return (
        <div>
            <section className="container pt-5 pb-5 ">



                <div className="text-center">
                    <h5 className="main_heading">Our Scolars</h5>
                </div>

                <div className="d-flex justify-content-center mt-4">
                    <div className="heading_line"></div>
                </div>
                <p className="text-center help_section_body_text mt-3">
                    Highly Qualified Team Supervises psum dolor sit amet, consectetur adipisicing elit, sed do <br></br> eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>




                <div className="row mt-5 d-flex justify-content-center text-center poppins mb-2">




                    {
                        allScolar.map(scolar => <div key={scolar._id} className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mt-3 mt-md-3 mt-lg-0 mt-xl-0">

                            <div className="col-12 card_shadow pt-5 pb-5 ps-3 pe-3 team_card">
                                <div className="team_section_img_container ">
                                    <div className="d-flex justify-content-center">
                                        <div className="team_section_img p-2 rounded-circle ">
                                            <img src={scolar.img} className="rounded-circle" alt='' />
                                        </div>
                                    </div>
                                </div>


                                <h5 className="team_heading mt-4">{scolar.name}</h5>

                                <p className="team_body mt-3 about-scholar"  >
                                    {scolar.short_description.slice(0, 70)}
                                </p>
                                <a href={scolar.facebook} className="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">

                                    <FontAwesomeIcon icon={faFacebook} className="icon" />



                                </a>

                                <a href={scolar.twitter} className="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">

                                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                                </a>
                                <a href={scolar.instagram} className="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">
                                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                                </a>
                                <a href={scolar.google} className="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">
                                    <FontAwesomeIcon icon={faGoogle} className="icon" />
                                </a>

                            </div>


                        </div>)
                    }



                </div>

            </section>
        </div>



    );
};

export default Scolar;