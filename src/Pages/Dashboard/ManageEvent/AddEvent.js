import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AddEvent = () => {




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
                    fetch('https://mosque-management-server.vercel.app/events', {
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





        <>
            <section className="content-main " style={{ maxWidth: "1200px" }}>
                <form onSubmit={handleSubmit(handleAddEvent)} >
                    <div className="content-header">
                        {/* <Link to="" className="btn btn-danger text-white">
        Go to products
      </Link> */}



                        <h2 className="content-title">Create Event</h2>
                        <div>
                            <Link to="/events" className=" btn btn-warning">
                                All Events
                            </Link>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-xl-8 col-lg-8">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <div className="mb-4">
                                        <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                            className="form-label">
                                            Event Name
                                        </label>
                                        <input

                                            type="text"
                                            // name='name'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Add Event Name "

                                            required

                                            {...register("name", {
                                                required: {
                                                    value: true,

                                                    message: 'Name is Required'
                                                }
                                            })}


                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Event Details</label>
                                        <textarea

                                            type="text"
                                            // name='short_description'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Details About Event "
                                            rows="7"


                                            required


                                            {...register("short_description", {
                                                required: {
                                                    value: true,

                                                    message: 'Name is Required'
                                                }
                                            })}
                                        ></textarea>
                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Event Date </label>
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
                                            className="form-label">Event Location</label>
                                        <input
                                            type="Text"
                                            // name='location'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="Add Event Location"
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
                                            placeholder="Organiger name"
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
                                            className="form-label">Organiger Phone</label>
                                        <input
                                            type="number"
                                            // name='location'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="Organiger Phone Number"
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
                                            className="form-label">Organizer Email</label>
                                        <input
                                            type="email"
                                            // name='location'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="MD Organizer Email "
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
                                            className="form-label">Upload Event Photo </label>
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
                            <button type="submit" className=" btn btn-warning">
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