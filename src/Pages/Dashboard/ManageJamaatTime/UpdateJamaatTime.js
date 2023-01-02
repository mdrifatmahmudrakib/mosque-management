import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UpdateJamaatTime = () => {


    // const [updateItem, setUpdateItem] = useState({});
    // const { id } = useParams();

    // useEffect(() => {
    //     fetch(`https://mosque-management-server.vercel.app/jamaattime/${id}`)
    //         .then(res => res.json())
    //         .then(result => {
    //             setUpdateItem(result);
    //             console.log(result)
    //         })
    // }, [id])





    const [updateItem, setUpdateItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://mosque-management-server.vercel.app/jamaattime/${id}`)
            .then(res => res.json())
            .then(result => {
                setUpdateItem(result);
                console.log(result)
            })
    }, [id])


    const handleUpdateJamaat = (event) => {
        event.preventDefault();
        const form = event.target;
        const fajr = form.fajr.value;
        const zuhr = form.zuhr.value;
        const asr = form.asr.value;
        const isha = form.isha.value;
        const magrib = form.magrib.value;


        const newCampaign = {
            fajr, zuhr, asr, isha, magrib,

        };
        fetch(`https://mosque-management-server.vercel.app/jamaattime/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                // reset();
                toast.success("Campaign Update Successfully");
            })
    };














    return (
        <>


            <section className="content-main " style={{ maxWidth: "1200px" }}>
                <form onSubmit={handleUpdateJamaat}>
                    <div className="content-header">
                        {/* <Link to="" className="btn btn-danger text-white">
    Go to products
  </Link> */}

                        <h2 className="content-title">Add Jammat Time</h2>

                    </div>

                    <div className="row mb-4  ">
                        <div className="col-xl-8 col-lg-8">
                            <div className="card mb-4 shadow-sm ">

                                <div className="card-body">
                                    <div className="mb-4">
                                        <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                            className="form-label">
                                            Fajr Time
                                        </label>
                                        <input
                                            defaultValue={updateItem.fajr}
                                            name='fajr'
                                            type="time"
                                            className="form-control" id="exampleFormControlInput1" placeholder="Add Fajr Jamaat Time "






                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                            className="form-label">
                                            Zuhr Time
                                        </label>
                                        <input
                                            defaultValue={updateItem.zuhr}
                                            name='zuhr'
                                            type="time"

                                            className="form-control" id="exampleFormControlInput1" placeholder="Add Zuhr Jamaat Time "






                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                            className="form-label">
                                            Asr Time
                                        </label>
                                        <input
                                            defaultValue={updateItem.asr}
                                            name='asr'
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
                                            defaultValue={updateItem.magrib}
                                            name='magrib'
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
                                            defaultValue={updateItem.isha}
                                            name='isha'
                                            type="time"
                                            // name='name'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Add Isha Jamaat Time "





                                        />
                                    </div>


                                </div>





                            </div>
                            <button type="submit" className=" btn btn-warning">
                                Update now
                            </button>
                        </div>
                    </div>
                </form>
            </section>


            {/* {
            jamaattime.map((jamaat) => <p>{jamaat.fajr} </p>



            )
        } */}
        </>

    );
};

export default UpdateJamaatTime;