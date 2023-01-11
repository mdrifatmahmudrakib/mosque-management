import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';


const UpdateEvent = () => {

    // const { register, handleSubmit, reset } = useForm();
    // const [updateItem, setUpdateItem] = useState({});
    // const { id } = useParams();

    // useEffect(() => {
    //     fetch(`https://mosque-management.onrender.com/event/${id}`)
    //         .then(res => res.json())
    //         .then(result => {
    //             setUpdateItem(result);
    //             console.log(result)
    //         })
    // }, [id])



    // const onSubmit = data => {
    //     const datas = {
    //         name: data.name,
    //         img: data.img,
    //         short_description: data.short_description,
    //         date: data.date,
    //         time: data.time
    //     }
    //     fetch(`https://mosque-management.onrender.com/event/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(datas)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //             // reset();
    //             toast.success("Campaign Update Successfully");
    //         })
    //     console.log(data);

    // }



    const [updateItem, setUpdateItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://mosque-management.onrender.com/event/${id}`)
            .then(res => res.json())
            .then(result => {
                setUpdateItem(result);
                console.log(result)
            })
    }, [id])



    const handleUpdateEvent = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const location = form.location.value;
        const orgBy = form.orgBy.value;
        const orgEmail = form.orgEmail.value;
        const orgPhone = form.orgPhone.value;
        const short_description = form.short_description.value;
        const img = form.img.value;




        const newEvent = {
            name,
            date,
            location,
            orgBy,
            orgEmail,
            orgPhone,
            short_description,
            img


        };
        fetch(`https://mosque-management.onrender.com/event/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                // reset();
                toast("Event Update Successfully");
            })
    };



    return (
        <>
            <section className="content-main " style={{ maxWidth: "1200px" }}>
                <form onSubmit={handleUpdateEvent} >
                    <div className="content-header">
                        {/* <Link to="" className="btn btn-danger text-white">
    Go to products
  </Link> */}

                        <h2 className="content-title">Update Event</h2>


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
                                            defaultValue={updateItem.name}
                                            type="text"
                                            name='name'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Add your Event Name "



                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Event Details</label>
                                        <textarea
                                            defaultValue={updateItem.short_description}
                                            type="text"
                                            name='short_description'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Update event details"
                                            rows="7"






                                        ></textarea>
                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Date </label>
                                        <input

                                            defaultValue={updateItem.date}
                                            type="datetime-local"
                                            name='date'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="update event date"



                                        />

                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Location</label>
                                        <input
                                            defaultValue={updateItem.location}
                                            type="Text"
                                            name='location'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="update location"
                                            required


                                        />

                                    </div>


                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Org By</label>
                                        <input
                                            defaultValue={updateItem.orgBy}
                                            type="text"
                                            name='orgBy'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="MD Imtius Ahammed"
                                            required


                                        />

                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">phone</label>
                                        <input
                                            defaultValue={updateItem.orgPhone}
                                            type="number"
                                            name='orgPhone'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="MD Imtius Ahammed"
                                            required


                                        />

                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Email</label>
                                        <input
                                            defaultValue={updateItem.orgEmail}
                                            type="email"
                                            name='orgEmail'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="MD Imtius Ahammed"
                                            required

                                        />

                                    </div>



                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Upload Event Photo </label>
                                        <input

                                            defaultValue={updateItem.img}
                                            type="link"
                                            // type="file"
                                            name='img'
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="link.mp3"



                                        />

                                    </div>

                                </div>

                            </div>
                            <button type="submit" className=" btn btn-warning">
                                Update Event
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default UpdateEvent;