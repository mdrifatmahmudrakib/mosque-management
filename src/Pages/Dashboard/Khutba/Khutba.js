import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Khutba = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // const handleAddKhutba = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const month = form.month.value;
    //     const about = form.about.value;
    //     const speaker = form.speaker.value;
    //     const link = form.link.value;



    //     const newKhutba = {
    //         month,
    //         about,
    //         speaker,
    //         link

    //     };
    //     fetch("http://localhost:5000/addKhutba", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //             // authorization: bearer ${localStorage.getItem("accessToken")},
    //         },
    //         body: JSON.stringify(newKhutba),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             if (data.acknowledged) {
    //                 toast.success("Succesfully Added Product");
    //                 form.reset();


    //             }
    //         })
    //         .catch((er) => console.error(er));
    // };


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
        // <form onSubmit={handleAddKhutba}>
        //     <div className='container border shadow mt-5 py-3'>
        //         <div className='row'>
        //             <div className="mb-3 mx-auto  col-lg-6 col-sm-12 ">
        //                 <div >
        //                     <label
        //                         for="exampleFormControlInput1"
        //                         className="form-label">Jummah Khutba Data</label>
        //                     <input
        //                         type="datetime-local"
        //                         name='month'
        //                         className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        //                 </div>
        //                 <div >
        //                     <label
        //                         for="exampleFormControlInput1"
        //                         className="form-label"

        //                     >About</label>
        //                     <input
        //                         type="text"
        //                         name='about'
        //                         className="form-control"
        //                         id="exampleFormControlInput1"
        //                         placeholder="Jummah Khutba About Crisis"

        //                     />
        //                 </div>
        //                 <div >
        //                     <label

        //                         for="exampleFormControlInput1"
        //                         className="form-label">Speaker</label>

        //                     <input
        //                         type="text"
        //                         name='speaker'
        //                         className="form-control" id="exampleFormControlInput1"
        //                         placeholder="MD Imtius Ahammed"

        //                     />
        //                 </div>
        //                 <div className="mb-3">
        //                     <label
        //                         for="exampleFormControlTextarea1"
        //                         className="form-label">Example textarea</label>
        //                     <input
        //                         type="text"
        //                         name='link'
        //                         className="form-control"
        //                         id="exampleFormControlInput1"
        //                         placeholder="link.mp3"

        //                     />

        //                 </div>
        //                 <button className='btn btn-primary'>Add Khutba</button>
        //             </div>
        //         </div>
        //     </div>
        // </form>

        <>
            <section className="content-main " style={{ maxWidth: "1200px" }}>
                <form onSubmit={handleSubmit(handleAddCampaign)} >
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
                                            Khutba Name
                                        </label>
                                        <input

                                            type="text"
                                            // name='name'
                                            className="form-control" id="exampleFormControlInput1" placeholder="Add your Khutba Name "

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

                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Upload Khutba's Photo </label>
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
                                Publish now
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Khutba;