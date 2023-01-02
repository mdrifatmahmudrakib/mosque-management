
import { faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';


const Muyajjem = () => {
    const [allMember, setMember] = useState([])
    useEffect(() => {
        fetch('https://mosque-management-server.vercel.app/experts/muyajjem')
            .then(res => res.json())
            .then(data => setMember(data))
    }, [])




    return (
        <div>
            <section className="container pt-5 pb-5 ">



                <div className="text-center">
                    <h5 className="main_heading">Our Muyajjem</h5>
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
                        allMember.map(member => <div key={member._id} className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mt-3 mt-md-3 mt-lg-0 mt-xl-0">

                            <div className="col-12 card_shadow pt-5 pb-5 ps-3 pe-3 team_card">
                                <div className="team_section_img_container ">
                                    <div className="d-flex justify-content-center">
                                        <div className="team_section_img p-2 rounded-circle ">
                                            <img src={member.img} className="rounded-circle" alt='' />
                                        </div>
                                    </div>
                                </div>


                                <h5 className="team_heading mt-4">{member.name}</h5>

                                <p className="team_body mt-3 about-scholar"  >
                                    {member.short_description}
                                </p>
                                <a href={member.facebook} className="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">

                                    <FontAwesomeIcon icon={faFacebook} className="icon" />



                                </a>

                                <a href={member.twitter} className="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">

                                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                                </a>
                                <a href={member.instagram} className="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">
                                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                                </a>
                                <a href={member.google} className="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">
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

export default Muyajjem;