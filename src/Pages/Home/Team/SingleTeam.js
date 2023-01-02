import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleTeam = ({ expert }) => {
    const { img, name, short_description, facebook, twitter, instagram, google } = expert;
    return (
        <div className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mt-3 mt-md-3 mt-lg-0 mt-xl-0">

            <div className="col-12 card_shadow pt-5 pb-5 ps-3 pe-3 team_card">
                <div className="team_section_img_container ">
                    <div className="d-flex justify-content-center">
                        <div className="team_section_img p-2 rounded-circle ">
                            <img src={img} className="rounded-circle" />
                        </div>
                    </div>
                </div>


                <h5 className="team_heading mt-4">{name}</h5>
                <p className="team_body mt-3 about-scholar"  >
                    {short_description}
                </p>
                <a href={facebook} className="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">

                    <FontAwesomeIcon icon={faFacebook} className="icon" />

                    {/* <FontAwesomeIcon icon={faFacebookF} className="icon" /> */}

                </a>

                <a href={twitter} className="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">

                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                </a>
                <a href={instagram} className="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
                <a href={google} className="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">
                    <FontAwesomeIcon icon={faGoogle} className="icon" />
                </a>
            </div>

        </div>
    );
};

export default SingleTeam;