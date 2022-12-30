import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const SingleJamaatTime = ({ jamaat }) => {
    const { _id, fajr, zuhr, asr, isha, magrib } = jamaat;
    const { id } = useParams();
    const navigate = useNavigate();

    const handlenavigateToupdateDetails = id => {
        navigate(`/dashboard/jamaattime/${id}`)
    }

    return (



        <form  >
            <div className="content-header">
                {/* <Link to="" className="btn btn-danger text-white">
Go to products
</Link> */}
                <button className='btn btn-danger text-white'>Go to Campaigns</button>
                <h2 className="content-title">Add Jammat Time</h2>
                <div>
                    <button onClick={() => handlenavigateToupdateDetails(_id)} className="btn btn-primary">
                        Update Jamaat Time
                    </button>
                </div>
            </div>

            <div className="row mb-4  ">



                <div className="col-xl-8 col-lg-8">
                    <div className="card mb-4 shadow-sm ">

                        <div className="card-body">
                            <div className="mb-4">
                                <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                    className="form-label">
                                    Fajr Time {_id}
                                </label>
                                <input
                                    value={fajr}
                                    type="time"
                                    // name='name'
                                    className="form-control" id="exampleFormControlInput1" placeholder="Add Fajr Jamaat Time "

                                    disabled




                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                    className="form-label">
                                    Zuhr Time
                                </label>
                                <input
                                    value={zuhr}
                                    disabled
                                    type="time"
                                    // name='name'
                                    className="form-control" id="exampleFormControlInput1" placeholder="Add Zuhr Jamaat Time "






                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                    className="form-label">
                                    Asr Time
                                </label>
                                <input
                                    value={asr}
                                    disabled
                                    type="time"
                                    // name='name'
                                    className="form-control" id="exampleFormControlInput1" placeholder="Add Asr Jamaat Time "






                                />
                            </div>


                            <div className="mb-4">
                                <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                    className="form-label">
                                    Magrib Time
                                </label>
                                <input
                                    value={magrib}
                                    disabled
                                    type="time"
                                    // name='name'
                                    className="form-control" id="exampleFormControlInput1" placeholder="Add Magrib Jamaat Time "





                                />
                            </div>


                            <div className="mb-4">
                                <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                    className="form-label">
                                    Isha Time
                                </label>
                                <input
                                    value={isha}
                                    disabled
                                    type="time"
                                    // name='name'
                                    className="form-control" id="exampleFormControlInput1" placeholder="Add Isha Jamaat Time "





                                />
                            </div>

                            {/* <button onClick={() => handlenavigateToupdateDetails(_id)}>up</button> */}


                        </div>

                    </div>
                    <button onClick={() => handlenavigateToupdateDetails(_id)} className="btn btn-primary">
                        Update Jamaat Time
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SingleJamaatTime;