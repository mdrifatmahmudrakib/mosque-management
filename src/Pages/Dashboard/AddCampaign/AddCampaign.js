import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AddCampaign.css'

const AddCampaign = () => {
    // const { register, handleSubmit, reset } = useForm();

    // const onSubmit = data => {
    //     console.log(data);



    //     const url = `http://localhost:5000/allcampaign`;
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //             toast.success("Campaign added successfully");
    //             reset();
    //         })
    // }


    const handleAddCampaign = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const short_description = form.short_description.value;
        const Raised = form.Raised.value;
        const Goal = form.Goal.value;
        const img = form.img.value;





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

        // <div className='container '>
        //     <h1 className='text-danger m-4'> Please add Your Item</h1>
        //     <div className="card border-0 lg:m-4" >
        //         <div className="row g-0">



        //             <div className='lg:w-75 mx-auto align-items-center  '>

        //                 <form className='d-flex flex-column lg:mx-3 shadow p-4 border rounded' onSubmit={handleSubmit(onSubmit)} >
        //                     <label className="lg:text-left text-start ">
        //                         <h6>Campaign Name</h6>
        //                     </label>
        //                     <input required className='mb-2 form-input' placeholder='Campaign Name'  {...register("name")} />



        //                     <label className="lg:text-left text-start ">
        //                         <h6>Item Photo URL</h6>
        //                     </label>


        //                     <input required className='mb-2 form-input' placeholder='Campaign Photo URL' type="text" {...register("img")} />


        //                     <label className="lg:text-left text-start  ">
        //                         <h6>Add Description</h6>
        //                     </label>
        //                     <textarea required className='mb-2 form-input form-input-des' placeholder='Campaign Description' {...register("short_description")} />


        //                     <label className="lg:text-left text-start ">
        //                         <h6>Raised</h6>
        //                     </label>
        //                     <input required className='mb-2 form-input' type="number" {...register("Raised")} />

        //                     <label className="lg:text-left text-start ">
        //                         <h6>Goal</h6>
        //                     </label>
        //                     <input required className='mb-2 form-input' type="number" {...register("Goal")} />


        //                     <input className='mt-2 form-button-add text-center w-25' type="submit" value='Submit' />
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>

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
                                            name='img'
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="link.mp3"
                                            required
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>


    );
};

export default AddCampaign;