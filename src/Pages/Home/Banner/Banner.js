import React from 'react';
import bsml from "../../../1_images/1_home/2_bsml-txt.png"
import oneline from "../../../1_images/1_home/1_line.png"
import banner from "../../../1_images/1_home/1_background-image.jpg";
import "./Banner.css"
import { Link } from 'react-router-dom';
const Banner = () => {
    return (

        <div className='home_banner'
            style={{
                background: `url(${banner}) `
            }}
        >

            <section className="home_text_container pt-5">
                <div className="bsml_container pt-5 mt-5">
                    <img src={bsml} className="pt-5" alt="bismillah photo" />
                    {/* <br> */}
                </div>
                <div>
                    <p className="poppins text-center knwo_the_real">Know the Real</p>
                    <p className="poppins text-center tafseer">Tafseer of Qur'an</p>
                    <div className="text-center pt-1 pb-3">
                        <img src={oneline} />
                    </div>

                    <div className="text-center when_things">
                        <p className="poppins ">
                            When things are too hard to handle,
                        </p>
                        <p className="poppins ">
                            retreat and count your blessings instead
                        </p>
                    </div>


                    <div className="text-center quran_online_container mt-5">
                        <Link to="/khutba" className="quran_online ps-5 pe-5 pt-3 pb-3"

                        >Quran Online</Link>


                    </div>


                </div>


            </section>
        </div>
    );
};

export default Banner;