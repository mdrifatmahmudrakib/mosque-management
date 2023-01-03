import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';

const SingleHelp = ({ cause }) => {
    const { _id, img, name, short_description, Raised, Goal } = cause;
    const navigate = useNavigate();
    const handlenavigateToHelpDetails = id => {
        navigate(`/campaign/${id}`)
    }
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-3 justify-content-center  mt-3 mt-md-3 mt-lg-0">
            <div className="help_card_shadow">
                <div
                > <img style={{ width: "400px", height: "250px" }} className='img-fluid w-52 h-96' src={img} alt="" />



                </div>

                <div className="card-body pt-2 ">
                    <h5 className="help_card_title ps-1 pe-1">{name}</h5>
                    <p className="help_card_text ps-2 pe-2">
                        {short_description.slice(0, 20)}

                    </p>

                </div>
                <div>
                    <button className="btn btn-warning text-white mb-4" onClick={() => handlenavigateToHelpDetails(_id)}>Donate</button>
                </div>
            </div>
        </div>
    );
};

export default SingleHelp;