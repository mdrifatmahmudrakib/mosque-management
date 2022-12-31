import { FastForward } from '@mui/icons-material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import bsml from "../../../1_images/1_home/2_bsml-txt.png"

const Footer = () => {
    return (
        <div className=' bg-black text-warning p-5 mx-auto border shadow  ' style={{


        }}>
            <div className='row  pb-5'>
                <div className='col-lg-3 col-md-3 d-flex flex-column justify-content-center align-items-center'>
                    <img className='w-75 ' src={bsml} alt="" />
                    <div >
                        <a href="#"><FacebookIcon></FacebookIcon></a>
                        <a href="#"> <TelegramIcon></TelegramIcon></a>
                        <a href="#"><WhatsAppIcon></WhatsAppIcon></a>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 '>

                    <div>

                        <h2>About us</h2>
                        <p>
                            Since 2021, Our institution guiding students and people around the world.

                            Helping others in every community and region with astonishing facilities.
                        </p>
                    </div>
                    <p><FastForward></FastForward> Jamia Mosque, Bangladesh</p>

                </div>

                <div className='col-lg-3 col-md-3'>
                    <h2>Quick Links</h2>
                    <div>
                        <a href="#" style={{ textDecoration: 'none' }}><p>Privacy Policy</p> </a>
                        <a href="#" style={{ textDecoration: 'none' }}><p>Terms And Condition </p></a>
                        <a href="#" style={{ textDecoration: 'none' }}><p>Disclaimer</p></a>

                    </div>




                </div>
                <div className='col-lg-3 col-md-3' >
                    <h4>Contact us</h4>
                    <p>+8801853599236</p>
                    <p>Email: example@gmail.com</p>
                    <address>Uttara 10, Dhaka</address>


                </div>

            </div>/
            <hr />
            <div>
                <h6>Copyright 2022, All Rights Reserved</h6>
            </div>

        </div>
    );
};

export default Footer;