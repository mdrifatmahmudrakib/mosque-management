import React from 'react';
import AllCampaigns from '../../../hooks/AllCampaigns';
import SingleHelp from '../Help/SingleHelp';

const HomeHelp = () => {

    const [causes] = AllCampaigns()


    return (
        <div>
            <section className="container pt-5 pb-5 poppins">

                <div className="mini_title">
                    <p className="text-center">Need Help For Help</p>
                </div>

                <div className="text-center">
                    <h5 className="main_heading">Our Causes</h5>
                </div>

                <div className="d-flex justify-content-center mt-4">
                    <div className="heading_line"></div>
                </div>

                <div className="mt-3">
                    <p className="text-center help_section_body_text">
                        Join hands with us to accomplish all these projects of serving humanity and <br></br> making this world a
                        better place to live.
                    </p>

                    <div className="row pt-3">
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