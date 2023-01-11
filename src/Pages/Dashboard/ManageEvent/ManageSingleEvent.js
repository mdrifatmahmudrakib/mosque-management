import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ManageSingleEvent = ({ event }) => {
    const { _id, name, img, short_description, date, time } = event;
    const { campaignId } = useParams();

    const navigate = useNavigate();

    const handlenavigateToEventDetails = id => {
        navigate(`/event/${id}`)
    }

    const handlenavigateToupdateDetails = id => {
        navigate(`/dashboard/updateevent/${id}`)
    }


    const [events, setEvents] = useState([]);

    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = `https://mosque-management.onrender.com/event/${id}`;
            fetch(url, {
                method: 'DELETE'
            })

                .then(response => response.json())
                .then(data => {


                    console.log(data);
                    const remaining = events.filter(event => event._id !== id)
                    setEvents(remaining);
                })

        }
    }
    return (
        <>
            <div className=' col-md-4 py-3 px-3 d-flex justify-content-center'>
                <div className="help_card_shadow">
                    <div
                    // style={{
                    //     background: `url(${img}) `
                    // }}
                    >

                        <img style={{ width: "400px", height: "350px" }} className='img-fluid w-52 h-96' src={img} alt="" />

                    </div>



                    <div className="row">

                        <div className='col d-flex justify-content-center'>



                            <div>
                                <div className="card-body p-2">
                                    <h5 className="help_card_title ps-1 pe-1">{name}</h5>
                                    <p className="help_card_text ps-2 pe-2">
                                        {short_description.slice(0, 40)}

                                    </p>

                                </div>


                                <button type="button" className="btn btn-primary m-2  " onClick={() => handlenavigateToEventDetails(_id)}><RemoveRedEyeIcon /></button>
                                <button onClick={() => handlenavigateToupdateDetails(_id)} type="button" className=" btn btn-success m-2 "> <CreateIcon /></button>
                                <button type="button" className="btn btn-danger m-2" onClick={() => handleDelete(event._id)}><DeleteOutlineIcon /></button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>









        </>
    );
};

export default ManageSingleEvent;