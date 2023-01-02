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
                                    <p className="slider_desc pb-3 ps-3 pe-3 text-black">
                                        <i>"</i>
                                        Easy to access of Islamic services in Center,Lorem ipsum dolor sit amet,<br></br>
                                        consectetur adipisicing elit, sed do eiusmod temporate.
                                        <i>"</i>
                                    </p>
                                </div>

                            </div>



                            {/* <!-- 2nd slider --> */}
                            <div className="carousel-item" data-bs-interval="2000">
                                <img height={150} src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-1/286868000_3087769124807606_7715354506193581423_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGp4mccqDjxWVoMoixNFmN-gRP9R5n1A3qBE_1HmfUDehrSFKQ84m8GqRMyDT2M9TvxqrF1yCLQYSeKpsjQG1G0&_nc_ohc=idFpORbdCcsAX-Ix2qs&_nc_ht=scontent.fdac110-1.fna&oh=00_AfAHBtMT6jBQl3tYlyHc_7-FN6ZfvzZXNpjVBxRM1FX9nA&oe=63B76A58"
                                    class="d-block rounded-circle mx-auto slider_img"
                                    className="d-block rounded-circle mx-auto slider_img" alt="..." />

                                <div className="text-center slider_text_cntainer mt-3">
                                    <h5 className="slider_heading">Md Rifat Mahmud Rakib</h5>
                                    <p className="slider_desc pb-3 text-black">
                                        <i>"</i>
                                        Easy to access of Islamic services in Center,Lorem ipsum dolor sit amet,<br></br>
                                        consectetur adipisicing elit, sed do eiusmod temporate.
                                        <i>"</i>
                                    </p>
                                </div>


                            </div>

                            {/* <!-- 3rd slider --> */}
                            <div className="carousel-item">
                                <img height={150} src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-1/320415081_855843165661365_7247201462647392244_n.jpg?stp=c324.253.909.909a_dst-jpg_s240x240&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFofpzhEwCghV6FDXRQtW6d_MUcfyx7ezb8xRx_LHt7Nk5_25vgrsutm4Bm0ypLtzl79ZQKDPVel7bmom2YrYHJ&_nc_ohc=opO5Txcsg1gAX-MjVZm&_nc_ht=scontent.fdac110-1.fna&oh=00_AfCqU-ti1OU_7zK9Txz-KM82uXN2UFiditg8-otNTYDZNg&oe=63B830AA"
                                    className="d-block rounded-circle mx-auto slider_img" alt="..." />

                                <div className="text-center slider_text_cntainer mt-3">
                                    <h5 className="slider_heading">Md. Imtius Ahammed</h5>
                                    <p className="slider_desc pb-3 text-black">
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