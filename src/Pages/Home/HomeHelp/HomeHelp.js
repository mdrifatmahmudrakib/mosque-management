import React from 'react';
import AllCampaigns from '../../../hooks/AllCampaigns';
import SingleHelp from '../Help/SingleHelp';

const HomeHelp = () => {

    const [causes] = AllCampaigns()


    return (
        <div>
            <section class="container pt-5 pb-5 poppins">

                <div class="mini_title">
                    <p class="text-center">Need Help For Help</p>
                </div>

                <div class="text-center">
                    <h5 class="main_heading">Our Causes</h5>
                </div>

                <div class="d-flex justify-content-center mt-4">
                    <div class="heading_line"></div>
                </div>

                <div class="mt-3">
                    <p class="text-center help_section_body_text">
                        Join hands with us to accomplish all these projects of serving humanity and <br></br> making this world a
                        better place to live.
                    </p>

                    <div class="row pt-3">
                        {
                            causes.slice(0, 6).map(cause => <SingleHelp
                                key={cause._id}
                                cause={cause}
                            ></SingleHelp>)
                        }





                    </div>
                </div>

            </section>
        </div>
    );
};

export default HomeHelp;