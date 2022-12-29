import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddEvent = () => {


    // const { register, handleSubmit, reset } = useForm();
    // const onSubmit = data => {
    //     console.log(data);
    //     const url = `http://localhost:5000/events`;
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


    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const imageStorageKey = '66d703a3620cbf4048028b3360c26490';


    const handleAddEvent = async data => {
        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const eventdata = {
                        name: data.name,
                        date: data.date,
                        location: data.location,
                        orgBy: data.orgBy,
                        email: data.email,
                        orgPhone: data.orgPhone,
                        short_description: data.short_description,
                        img: img




                    }
                    // send to your database 
                    fetch('http://localhost:5000/events', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(eventdata)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Imam added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the Imam');
                            }
                        })

                }

            })
    }

    return (
        // <div className='container '>
        //     <h1 className='text-danger m-4'> Please add Your Event</h1>
        //     <div className="card border-0 m-4" >
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





        //                     <label className="lg:text-left text-start ">
        //                         <h6>Date</h6>
        //                     </label>
        //                     <input required className='mb-2 form-input' type="date" {...register("date")} />

        //                     <label className="lg:text-left text-start ">
        //                         <h6>Time</h6>
        //                     </label>
        //                     <input required className='mb-2 form-input' type="time" {...register("time")} />
        //                     <label className="lg:text-left text-start ">
        //                         <h6>Location</h6>
        //                     </label>
        //                     <input required className='mb-2 form-input' type="text" {...register("location")} />

        //                     <label className="lg:text-left text-start ">
        //                         <h6>Organizer By</h6>
        //                     </label>
        //                     <input required className='mb-2 form-input' type="text" {...register("orgBy")} />
        //                     <label className="lg:text-left text-start ">
        //                         <h6>Organizer Phone</h6>
        //                     </label>
        //                     <input required className='mb-2 form-input' type="number" {...register("orgPhone")} />
        //                     <label className="lg:text-left text-start ">
        //                         <h6>Organizer Email</h6>
        //                     </label>
        //                     <input required className='mb-2 form-input' type="email" {...register("orgEmail")} />

        //                     <label className="lg:text-left text-start  ">
        //                         <h6>Add Description</h6>
        //                     </label>
        //                     <textarea required className='mb-2 form-input form-input-des' placeholder='Campaign Description' {...register("short_description")} />

        //                     <input className='mt-2 form-button-add text-center w-25' type="submit" value='Submit' />
        //                 </form>
        //             </div>

        //         </div>
        //     </div>
        // </div>



        <>
            <section className="content-main " style={{ maxWidth: "1200px" }}>
                <form onSubmit={handleSubmit(handleAddEvent)} >
                    <div className="content-header">
                        {/* <Link to="" className="btn btn-danger text-white">
        Go to products
      </Link> */}
                        <button className='btn btn-danger text-white'>Go to Event</button>
                        <h2 className="content-title">Add Event</h2>
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
                                            // name='name'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Add your Campaign Name "

                                            required

                                            {...register("name", {
                                                required: {
                                                    // value: true,

                                                    message: 'Name is Required'
                                                }
                                            })}


                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Campaign Details</label>
                                        <textarea

                                            type="text"
                                            // name='short_description'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Jummah Khutba About Crisis"
                                            rows="7"


                                            required


                                            {...register("short_description", {
                                                required: {
                                                    // value: true,

                                                    message: 'Name is Required'
                                                }
                                            })}
                                        ></textarea>
                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Date </label>
                                        <input
                                            type="datetime-local"
                                            // name='date'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="MD Imtius Ahammed"
                                            required

                                            {...register("date", {
                                                required: {
                                                    value: true,
                                                    message: 'Number is Required'
                                                }
                                            })}
                                        />

                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Location</label>
                                        <input
                                            type="Text"
                                            // name='location'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="MD Imtius Ahammed"
                                            required

                                            {...register("location", {
                                                required: {
                                                    value: true,
                                                    message: 'Number is Required'
                                                }
                                            })}
                                        />

                                    </div>


                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Org By</label>
                                        <input
                                            type="Text"
                                            // name='location'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="MD Imtius Ahammed"
                                            required

                                            {...register("orgBy", {
                                                required: {
                                                    value: true,
                                                    message: 'Number is Required'
                                                }
                                            })}
                                        />

                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">phone</label>
                                        <input
                                            type="number"
                                            // name='location'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="MD Imtius Ahammed"
                                            required

                                            {...register("orgPhone", {
                                                required: {
                                                    value: true,
                                                    message: 'Number is Required'
                                                }
                                            })}
                                        />

                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Email</label>
                                        <input
                                            type="email"
                                            // name='location'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="MD Imtius Ahammed"
                                            required

                                            {...register("orgEmail", {
                                                required: {
                                                    value: true,
                                                    message: 'Number is Required'
                                                }
                                            })}
                                        />

                                    </div>



                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Upload Campaign Photo </label>
                                        <input
                                            // type="link"
                                            type="file"
                                            // name='img'
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="link.mp3"
                                            required

                                            {...register("img", {
                                                required: {
                                                    value: true,
                                                    message: 'Image is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        </label>
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

export default AddEvent;