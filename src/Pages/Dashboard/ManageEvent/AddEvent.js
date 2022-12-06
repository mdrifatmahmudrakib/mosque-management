import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddEvent = () => {


    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);


        const url = `http://localhost:5000/events`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success("Campaign added successfully");
                reset();
            })
    }
    return (
        <div className='container '>
            <h1 className='text-danger m-4'> Please add Your Event</h1>
            <div className="card border-0 m-4" >
                <div className="row g-0">

                    <div className='lg:w-75 mx-auto align-items-center  '>

                        <form className='d-flex flex-column lg:mx-3 shadow p-4 border rounded' onSubmit={handleSubmit(onSubmit)} >
                            <label className="lg:text-left text-start ">
                                <h6>Campaign Name</h6>
                            </label>
                            <input required className='mb-2 form-input' placeholder='Campaign Name'  {...register("name")} />


                            <label className="lg:text-left text-start ">
                                <h6>Item Photo URL</h6>
                            </label>

                            <input required className='mb-2 form-input' placeholder='Campaign Photo URL' type="text" {...register("img")} />





                            <label className="lg:text-left text-start ">
                                <h6>Date</h6>
                            </label>
                            <input required className='mb-2 form-input' type="text" {...register("date")} />

                            <label className="lg:text-left text-start ">
                                <h6>Time</h6>
                            </label>
                            <input required className='mb-2 form-input' type="text" {...register("time")} />
                            <label className="lg:text-left text-start ">
                                <h6>Location</h6>
                            </label>
                            <input required className='mb-2 form-input' type="text" {...register("location")} />

                            <label className="lg:text-left text-start ">
                                <h6>Organizer By</h6>
                            </label>
                            <input required className='mb-2 form-input' type="text" {...register("orgBy")} />
                            <label className="lg:text-left text-start ">
                                <h6>Organizer Phone</h6>
                            </label>
                            <input required className='mb-2 form-input' type="number" {...register("orgPhone")} />
                            <label className="lg:text-left text-start ">
                                <h6>Organizer Email</h6>
                            </label>
                            <input required className='mb-2 form-input' type="email" {...register("orgEmail")} />

                            <label className="lg:text-left text-start  ">
                                <h6>Add Description</h6>
                            </label>
                            <textarea required className='mb-2 form-input form-input-des' placeholder='Campaign Description' {...register("short_description")} />

                            <input className='mt-2 form-button-add text-center w-25' type="submit" value='Submit' />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddEvent;