import { FastForward } from '@mui/icons-material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import bsml from "../../../1_images/1_home/2_bsml-txt.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-black text-warning p-5 mx-auto border shadow d-print-none ' style={{


        }}>
            <div className='row  pb-5'>
                <div className='col-lg-3 col-md-3 d-flex flex-column justify-content-center align-items-center'>
                    <img className='w-75 ' src={bsml} alt="" />

                    <div   >
                        <Link className='text-warning' ><FacebookIcon></FacebookIcon></Link>
                        <Link className='text-warning'> <TelegramIcon></TelegramIcon></Link>
                        <Link className='text-warning'><WhatsAppIcon></WhatsAppIcon></Link>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 '>

                    <div>

                        <h2>About us</h2>
                        <p className='text-white'>
                            Since 2021, Our institution guiding students and people around the world.

                            Helping others in every community and region with astonishing facilities.
                        </p>
                    </div>
                    <p className='text-white'><FastForward></FastForward> Jamia Mosque, Bangladesh</p>

                </div>

                <div className='col-lg-3 col-md-3'>
                    <h2>Quick Links</h2>
                    <div>
                        <Link style={{ textDecoration: 'none', color: "white" }}><p>Privacy Policy</p> </Link>
                        <Link style={{ textDecoration: 'none', color: "white" }}><p>Terms And Condition </p></Link>
                        <Link style={{ textDecoration: 'none', color: "white" }}><p>Disclaimer</p></Link>

                    </div>




                </div>
                <div className='col-lg-3 col-md-3' >
                    <h4  >Contact us</h4>
                    <p className='text-white'>+8801853599236</p>
                    <p className='text-white'>mosquemanagement@gmail.com</p>
                    <address className='text-white'>Uttara 10, Dhaka</address>


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