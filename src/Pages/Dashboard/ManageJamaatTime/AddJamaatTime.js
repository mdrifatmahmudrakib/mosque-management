import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddJamaatTime = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://mosque-management.onrender.com/jamaattime`;
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
                toast.success("Jamaat Time added successfully");
                reset();
            })
    }


    return (
        <>
            <section className="content-main " style={{ maxWidth: "1200px" }}>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="content-header">
                        {/* <Link to="" className="btn btn-danger text-white">
        Go to products
      </Link> */}

                        <h2 className="content-title">Add Jammat Time</h2>
                        <div>
                            <button type="submit" className=" btn btn-warning">
                                Publish now
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
                                            Fajr Time
                                        </label>
                                        <input

                                            type="time"
                                            // name='name'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Add Fajr Jamaat Time "

                                            required

                                            {...register("fajr", {
                                                required: {
                                                    // value: true,

                                                    message: 'Name is Required'
                                                }
                                            })}


                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                            className="form-label">
                                            Zuhr Time
                                        </label>
                                        <input

                                            type="time"
                                            // name='name'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Add Zuhr Jamaat Time "

                                            required

                                            {...register("zuhr", {
                                                required: {
                                                    // value: true,

                                                    message: 'Name is Required'
                                                }
                                            })}


                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                            className="form-label">
                                            Asr Time
                                        </label>
                                        <input

                                            type="time"
                                            // name='name'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Add Asr Jamaat Time "

                                            required

                                            {...register("asr", {
                                                required: {
                                                    // value: true,

                                                    message: 'Name is Required'
                                                }
                                            })}


                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                            className="form-label">
                                            Magrib Time
                                        </label>
                                        <input

                                            type="time"
                                            // name='name'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Add Magrib Jamaat Time "

                                            required

                                            {...register("magrib", {
                                                required: {
                                                    // value: true,

                                                    message: 'Name is Required'
                                                }
                                            })}


                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                            className="form-label">
                                            Isha Time
                                        </label>
                                        <input

                                            type="time"
                                            // name='name'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Add Isha Jamaat Time "

                                            required

                                            {...register("isha", {
                                                required: {
                                                    // value: true,

                                                    message: 'Name is Required'
                                                }
                                            })}


                                        />
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

export default AddJamaatTime;