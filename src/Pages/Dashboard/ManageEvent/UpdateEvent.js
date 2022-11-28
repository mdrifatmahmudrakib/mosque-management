import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateEvent = () => {

    const { register, handleSubmit, reset } = useForm();
    const [updateItem, setUpdateItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/event/${id}`)
            .then(res => res.json())
            .then(result => {
                setUpdateItem(result);
                console.log(result)
            })
    }, [id])



    const onSubmit = data => {
        const datas = {
            name: data.name,
            img: data.img,
            short_description: data.short_description,
            date: data.date,
            time: data.time
        }
        fetch(`http://localhost:5000/event/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
                toast.success("Campaign Update Successfully");
            })
        console.log(data);

    }
    return (
        <div>
            <div className='container '>
                <h1 className='text-danger m-4'> Please Update Your event Item: {id}</h1>
                <div className="card border-0 m-4" >
                    <div className="row g-0">



                        <div className='w-50 mx-auto align-items-center  '>

                            <form className='d-flex flex-column mx-3 shadow p-3 ' onSubmit={handleSubmit(onSubmit)} >
                                <label className="text-left ">
                                    <h5>Campaign Name</h5>
                                </label>
                                <input required className='mb-2 ' placeholder='Campaign Name' {...register("name")} defaultValue={updateItem.name} />


                                <label className="text-left ">
                                    <h5>Item Photo URL</h5>
                                </label>
                                {/* <input className='mb-2' type="file" id="myFile" name="filename" {...register("image")} /> */}
                                <input required className='mb-2' placeholder='Campaign Photo URL' type="text" {...register("img")} defaultValue={updateItem.img} />


                                <label className="text-left ">
                                    <h5>Add Description</h5>
                                </label>
                                <textarea required className='mb-2' placeholder='Campaign Description' {...register("short_description")} defaultValue={updateItem.short_description} />


                                <label className="text-left ">
                                    <h5>Raised</h5>
                                </label>
                                <input required className='mb-2' placeholder='Item Price' type="number" {...register("date")} defaultValue={updateItem.date} />

                                <label className="text-left ">
                                    <h5>Goal</h5>
                                </label>
                                <input required className='mb-2' placeholder='Item Price' type="number" {...register("time")} defaultValue={updateItem.time} />


                                <input className='mt-2 btn btn-dark' type="submit" value='Add Item' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateEvent;