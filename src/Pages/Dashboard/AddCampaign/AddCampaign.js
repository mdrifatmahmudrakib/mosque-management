import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AddCampaign.css'

const AddCampaign = () => {
    const imageStorageKey = '66d703a3620cbf4048028b3360c26490';
    const handleAddCampaign = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const short_description = form.short_description.value;
        const Raised = form.Raised.value;
        const Goal = form.Goal.value;
        const img = form.img.value;




        //     //imge:
        //     const image = event.image[0];

        //     const formData = new FormData();

        //     formData.append('image', image);
        //     const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        //     fetch(url, {
        //         method: 'POST',
        //         body: formData
        //     })


        //         .then(res => res.json())
        //         .then(result => {
        //             if (result.success) {
        //                 const image = result.event.url;
        //                 const newCampaign = {
        //                     name: event.name,
        //                     short: event.short_description,
        //                     raised: event.Raised,
        //                     goal: event.Goal,
        //                     img: event.image


        //                 }
        //                 // send to your database 
        //                 fetch('http://localhost:5000/campaigns', {
        //                     method: 'POST',
        //                     headers: {
        //                         'content-type': 'application/json',
        //                         authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //                     },
        //                     body: JSON.stringify(newCampaign)
        //                 })
        //                     .then(res => res.json())
        //                     .then(inserted => {
        //                         if (inserted.insertedId) {
        //                             toast.success('Imam added successfully')
        //                             form.reset();
        //                         }
        //                         else {
        //                             toast.error('Failed to add the Imam');
        //                         }
        //                     })

        //             }

        //         })
        // }


        const newCampaign = {
            name,
            img,
            short_description,
            Raised,
            Goal

        };
        fetch("http://localhost:5000/campaigns", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                // authorization: bearer ${localStorage.getItem("accessToken")},
            },
            body: JSON.stringify(newCampaign),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Succesfully Added Campaign");
                    form.reset();


                }
            })
            .catch((er) => console.error(er));
    };



    return (

        <>
            <section className="content-main " style={{ maxWidth: "1200px" }}>
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

                                            type="text"
                                            name='short_description'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Jummah Khutba About Crisis"
                                            rows="7"


                                            required
                                        ></textarea>
                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Amout Rise </label>
                                        <input
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
                                            type="text"
                                            name='Goal'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="MD Imtius Ahammed"
                                            required
                                        />

                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Upload Campaign Photo </label>
                                        <input
                                            type="link"
                                            // type="file"
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

export default AddCampaign;