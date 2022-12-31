import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';


const Khutba = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();




    const handleAddCampaign = async data => {

        const url = `https://${data.img[0].name}`;
        const khutba = {

            name: data.name,
            speaker: data.speaker,
            month: data.month,
            img: url,
            about: data.about,





        }
        console.log(khutba);
        // send to your database 
        fetch('http://localhost:5000/allKhutba', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(khutba)

        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('khutba added successfully')
                    reset();
                }
                else {
                    toast.error('Failed to add the Imam');
                }
            })

    }



    return (


        <>
            <section className="content-main " style={{ maxWidth: "1200px" }}>
                <form onSubmit={handleSubmit(handleAddCampaign)} >
                    <div className="content-header">
                        {/* <Link to="" className="btn btn-danger text-white">
        Go to products
      </Link> */}
                        {/* <button className='btn btn-danger text-white'>All Khutba</button> */}
                        <h2 className="content-title">Upload Recent Khutba</h2>
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
                                            Khutba Topic Name
                                        </label>
                                        <input

                                            type="text"
                                            // name='name'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Add Khutba Topic Name "

                                            required

                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: 'Khutba Name is Required'
                                                }
                                            })}


                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Details About Khutba</label>
                                        <textarea



                                            type="text"
                                            // name='short_description'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Please give details about Khutba"
                                            rows="7"


                                            required


                                            {...register("about", {
                                                required: {
                                                    // value: true,

                                                    message: 'Content is Required'
                                                }
                                            })}
                                        ></textarea>
                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Jummah Khutba Data </label>
                                        <input

                                            // name='Raised'
                                            type="datetime-local"
                                            //                        
                                            className="form-control" id="exampleFormControlInput1"

                                            required

                                            {...register("month", {
                                                required: {
                                                    value: true,
                                                    message: 'Number is Required'
                                                }
                                            })}
                                        />

                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Speaker</label>
                                        <input

                                            type="text"
                                            name='speaker'

                                            placeholder="Speaker name "


                                            // name='Goal'
                                            className="form-control" id="exampleFormControlInput1"

                                            required

                                            {...register("speaker", {
                                                required: {
                                                    value: true,
                                                    message: 'Number is Required'
                                                }
                                            })}
                                        />

                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Khutba's Audio </label>
                                        <input
                                            type="text"
                                            // type="file"
                                            // name='img'
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Upload Khutba's Audio"
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



                                    {/* <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Upload the Audio File</label>
                                        <input

                                            type="file"
                                            name='speaker'

                                            placeholder="Speaker name please"


                                            // name='Goal'
                                            className="form-control" id="exampleFormControlInput1"

                                            required

                                            {...register("speaker", {
                                                required: {
                                                    value: true,
                                                    message: 'Number is Required'
                                                }
                                            })}
                                        />

                                    </div> */}

                                </div>

                            </div>
                            <button type="submit" className="btn btn-primary">
                                Upload Khutba
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Khutba;