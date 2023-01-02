// import React from 'react';
// import "./Support.css";
// import support from "../../../1_images/6_support-section/1_background-img.jpg";
// const Support = () => {
//     return (
//         <div className="container-fluid support_section pt-5 pb-5 poppins" style={{
//             background: `url(${support}) `


//         }}>
//             <div className="mini_title mt-5">
//                 <p className="text-center" style={{ color: '#D1AD3C' }}>Support Us</p>
//             </div>

//             <div className="text-center">
//                 <h5 className="main_heading" style={{ color: 'white' }}>We Need Your Help</h5>
//             </div>

//             <div className="d-flex justify-content-center mt-4">
//                 <div className="support_heading_line"></div>
//             </div>

//             <div className="mt-5">
//                 <p className="text-center help_section_body_text help-section"  >
//                     People suffering from hunger amet, consectetur adipisicing elit, sed do eiusmod <br></br> tempor incididunt
//                     ut labore pariatur located in Syria, Iraq and Kenya.
//                 </p>


//                 <div className="circle_body pt-4">
//                     <div>
//                         <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"
//                             className='progress'>
//                         </div>
//                         <div className="text-center mt-2 circle_label">Mosque</div>
//                     </div>

//                     <div className="ps-5 pe-5 ">
//                         <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"
//                             className='progress'>
//                         </div>
//                         <div className="text-center mt-2 circle_label">Mosque</div>
//                     </div>

//                     <div>
//                         <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"
//                             className='progress'>
//                         </div>
//                         <div className="text-center mt-2 circle_label">Feed</div>
//                     </div>

//                 </div>
//                 <div className="text-center mt-5 mb-5">
//                     <a href="#" className="rounded-pill btn donate_now_btn ps-5 pe-5 pt-3 pb-3">Donate Now</a>
//                 </div>

//             </div>

//         </div>
//     );
// };

// export default Support;

import { faHandHoldingDollar, faKaaba, faMoon, faMosque, faPersonPraying } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Support.css";

const Support = () => {
    return (
        <div class="container-fluid support_section pt-5 pb-5 poppins" style={{
            backgroundImage: `url("https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg?w=1380&t=st=1672678729~exp=1672679329~hmac=7c7d1f81e1877651ac445b74fdc6787c130cbb7de1c458d5b9e09825c698292b")`
            , backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",



        }}>
            <div class="mini_title mt-5">
                <h2 class="text-center " style={{ color: '#D1AD3C' }}>Support Us</h2>
            </div>

            <div class="text-center">
                <h3 className='text-black' >We Need Your Help</h3>
            </div>

            <div class="d-flex justify-content-center ">
                <div class="support_heading_line"></div>
            </div>

            <div class="mt-5 container mx-auto  py-5">
                <p class="text-center text-black  help_section_body_text help-section"  >
                    Your efforts to build a mosque come under the heading of righteous deeds. Allah, may He be exalted, says (interpretation of the meaning):

                    “The Mosques of Allah shall be maintained only by those who believe in Allah and the Last Day; perform As-Salat (Iqamat-as-Salat), and give Zakat and fear none but Allah. It is they who are expected to be on true guidance”

                    [at-Tawbah 9:18].
                </p>


                <div class="pt-4 container mx-auto justify-content-center align-items-center d-flex gap-3 flex-wrap flex-lg-nowrap flex-sm-wrap flex-md-nowrap">
                    <div>
                        <div className=' mx-auto p-4 ' >
                            {/* <img className='img-fluid' src="https://play-lh.googleusercontent.com/7VRHubaLbRbWzqCC-0dFElJv7rIN5DAC9vz55WnAD24P3l61e80j1GfN7t2MjBxDqg" alt="" /> */}
                            <FontAwesomeIcon icon={faMosque} className="service_icon " />
                        </div>
                        <div class="text-center text-black fw-bold h2 mt-2 ">Kalima</div>
                    </div>
                    <div >
                        <div className='mx-auto p-4' >
                            {/* <img className='img-fluid' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/salat-1698982-1457399.png" alt="" /> */}
                            <FontAwesomeIcon icon={faPersonPraying} className="service_icon " />
                        </div>
                        <div class="text-center mt-2 text-black fw-bold h2 ">Salah</div>
                    </div>
                    <div >
                        <div className=' mx-auto p-4' >
                            {/* <img className='img-fluid' src="https://cdn-icons-png.flaticon.com/512/4336/4336744.png" alt="" /> */}
                            <FontAwesomeIcon icon={faMoon} className="service_icon " />
                        </div>
                        <div class="text-center mt-2 text-black fw-bold h2 ">Sawm</div>
                    </div>
                    <div >
                        <div className=' mx-auto p-4' >
                            {/* <img className='img-fluid' src="https://cdn-icons-png.flaticon.com/512/4245/4245617.png" alt="" /> */}
                            <FontAwesomeIcon icon={faHandHoldingDollar} className="service_icon " />
                        </div>
                        <div class="text-center mt-2 text-black fw-bold h2 ">Zakat</div>
                    </div>
                    <div >
                        <div className=' mx-auto p-4' >
                            {/* <img className='img-fluid' src="https://cdn-icons-png.flaticon.com/512/84/84661.png" alt="" /> */}
                            <FontAwesomeIcon icon={faKaaba} className="service_icon " />
                        </div>
                        <div class="text-center text-black fw-bold h2 mt-2 ">Hajj</div>
                    </div>




                </div>
                <div class="text-center mt-5 mb-5">
                    <a href="/donate" class="rounded-pill btn donate_now_btn ps-5 pe-5 pt-3 pb-3">Donate Now</a>
                </div>

            </div>

        </div>
    );
};

export default Support;