import React from 'react';
import "./Tetimonial.css"
import testimonial from "../../../1_images/7_testimonial-section/1st.jpg";
import testimonialfirst from "../../../1_images/7_testimonial-section/1st.jpg";
import testimonialfir from "../../../1_images/7_testimonial-section/1st.jpg";

const Tetimonial = () => {
    return (
        <div className="container-fluid pt-5 pb-5 poppins">


            <div className="mini_title">
                <p className="text-center">What Our</p>
            </div>

            <div className="text-center">
                <h5 className="main_heading">Donators Say</h5>
            </div>

            <div className="d-flex justify-content-center mt-4">
                <div className="heading_line"></div>
            </div>


            <div className="p-5 d-flex justify-content-center ">


                <div className="col-lg-9 col-md-12 col-12 slider mt-5">
                    {/* <!-- slider --> */}
                    <div id="carouselExampleDark" className="carousel carousel-dark slide slider_container"
                        data-bs-ride="carousel">



                        {/* <!-- 1st slider --> */}
                        <div className="carousel-inner mt-5">

                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={testimonial}
                                    className="d-block rounded-circle mx-auto slider_img" alt="..." />

                                <div className="text-center slider_text_cntainer mt-3">
                                    <h5 className="slider_heading">Farha Ahmed</h5>
                                    <p className="slider_desc pb-3 ps-3 pe-3">
                                        <i>"</i>
                                        Easy to access of Islamic services in Center,Lorem ipsum dolor sit amet,<br></br>
                                        consectetur adipisicing elit, sed do eiusmod temporate.
                                        <i>"</i>
                                    </p>
                                </div>

                            </div>



                            {/* <!-- 2nd slider --> */}
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={testimonialfirst}
                                    className="d-block rounded-circle mx-auto slider_img" alt="..." />

                                <div className="text-center slider_text_cntainer mt-3">
                                    <h5 className="slider_heading">Farha Ahmed</h5>
                                    <p className="slider_desc pb-3">
                                        <i>"</i>
                                        Easy to access of Islamic services in Center,Lorem ipsum dolor sit amet,<br></br>
                                        consectetur adipisicing elit, sed do eiusmod temporate.
                                        <i>"</i>
                                    </p>
                                </div>


                            </div>

                            {/* <!-- 3rd slider --> */}
                            <div className="carousel-item">
                                <img src={testimonialfir}
                                    className="d-block rounded-circle mx-auto slider_img" alt="..." />

                                <div className="text-center slider_text_cntainer mt-3">
                                    <h5 className="slider_heading">Farha Ahmed</h5>
                                    <p className="slider_desc pb-3">
                                        <i>"</i>
                                        Easy to access of Islamic services in Center,Lorem ipsum dolor sit amet,<br></br>
                                        consectetur adipisicing elit, sed do eiusmod temporate.
                                        <i>"</i>
                                    </p>
                                </div>


                            </div>


                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="prev">
                                <span className="previous_slider_icon" aria-hidden="true"><i
                                    className="fal fa-arrow-alt-from-right"></i></span>
                                <span className="visually-hidden">Previous</span>
                            </button>


                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="next">
                                <span className="next_slider_icon" aria-hidden="true"><i
                                    className="fal fa-arrow-alt-from-left"></i></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>



            </div>


        </div>
    );
};

export default Tetimonial;