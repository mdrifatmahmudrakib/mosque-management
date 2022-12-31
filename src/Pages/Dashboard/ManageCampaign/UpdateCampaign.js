import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';


const UpdateCampaign = () => {

    const [updateItem, setUpdateItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/campaign/${id}`)
            .then(res => res.json())
            .then(result => {
                setUpdateItem(result);
                console.log(result)
            })
    }, [id])



    const handleAddCampaign = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const short_description = form.short_description.value;
        // const Raised = form.Raised.value;
        // const Goal = form.Goal.value;
        const img = form.img.value;


        const newCampaign = {
            name,
            img,
            short_description,
            // Raised,
            // Goal

        };
        fetch(`http://localhost:5000/campaign/${id}`, {
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
            <section className="content-main" style={{ maxWidth: "1200px" }}>
                <form onSubmit={handleAddCampaign}>
                    <div className="content-header">
                        {/* <Link to="" className="btn btn-danger text-white">
            Go to products
          </Link> */}
                        <button className='btn btn-danger text-white'>Go to Campaigns</button>
                        <h2 className="content-title">Add Campaign</h2>
                        <div>
                            <button type="submit" className="btn btn-primary">
                                Publish now
                            </button>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-xl-8 col-lg-8">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <div className="mb-4">
                                        <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                            className="form-label">
                                            Campaign Name
                                        </label>
                                        <input
                                            defaultValue={updateItem.name}
                                            type="text"
                                            name='name'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Add your Campaign Name "

                                            required
                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Campaign Details</label>
                                        <textarea
                                            defaultValue={updateItem.short_description}
                                            type="text"
                                            name='short_description'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Jummah Khutba About Crisis"
                                            rows="7"


                                            required
                                        ></textarea>
                                    </div>

                                    {/* <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Amout Rise </label>
                                        <input
                                            defaultValue={updateItem.Raised}
                                            type="text"
                                            name='Raised'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="MD Imtius Ahammed"
                                            required
                                        />

                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Goal</label>
                                        <input

                                            defaultValue={updateItem.Goal}
                                            type="number"
                                            name='Goal'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="MD Imtius Ahammed"
                                            required
                                        />

                                    </div> */}

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Upload Campaign Photo </label>
                                        <input
                                            // type="link"

                                            defaultValue={updateItem.img}
                                            type="link"
                                            name='img'
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="link.mp3"
                                            required
                                        />

                                    </div>

                                </div>

                            </div>
                            <button type="submit" className="btn btn-primary">
                                Publish now
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>


    );
};

export default UpdateCampaign;