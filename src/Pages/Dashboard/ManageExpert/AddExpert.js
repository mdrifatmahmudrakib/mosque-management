import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';


const AddExpert = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // const [user] = useAuthState(auth);
    const imageStorageKey = '66d703a3620cbf4048028b3360c26490';


    const handleAddCampaign = async data => {
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
                    const imam = {
                        name: data.name,
                        facebook: data.facebook,
                        role: data.role,
                        twitter: data.twitter,
                        google: data.google,
                        short_description: data.short_description,
                        img: img,
                        instagram: data.instagram,
                        phone: data.phone

                    }
                    // send to your database 
                    fetch('https://mosque-management-server.vercel.app/experts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(imam)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Expert added successfully')
                                reset();
                            }
                            else {
                                toast.success('Failed to add the Expert');
                            }
                        })

                }

            })
    }


    return (
        <>
            <section className="content-main " style={{ maxWidth: "1200px" }}>
                <form onSubmit={handleSubmit(handleAddCampaign)} >
                    <div className="content-header">


                        <h2 className="content-title">Add Expert</h2>
                        <div>
                            <Link to="/allexperts" className=" btn btn-warning">
                                All Experts
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
                                            Select Role
                                        </label>
                                        <select
                                            name='role'
                                            className="form-control" id="exampleFormControlInput1"

                                            required

                                            {...register("role", {
                                                required: {
                                                    // value: true,

                                                    message: 'Role is Required'
                                                }
                                            })}>
                                            <option selected>imam</option>
                                            <option >muyajjem</option>
                                            <option >khatib</option>
                                            <option >khadem</option>
                                            <option >scolar</option>
                                            <option >chairman</option>
                                            <option >viceChairman</option>
                                            <option >secretaryGeneral</option>
                                            <option >member</option>
                                        </select>

                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_title" for="exampleFormControlTextarea1"
                                            className="form-label">
                                            Expert  Name
                                        </label>
                                        <input

                                            type="text"
                                            name='name'
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
                                            className="form-label">Expert Details</label>
                                        <textarea maxlength="600"

                                            type="text"
                                            name='short_description'
                                            className="form-control" id="exampleFormControlInput1" placeholder="description"
                                            rows="7"


                                            required


                                            {...register("short_description", {
                                                required: {
                                                    // value: true,

                                                    message: 'short_description is Required'
                                                }
                                            })}
                                        ></textarea>
                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Phone </label>
                                        <input
                                            type="number"
                                            name='phone'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="+880...."
                                            // required

                                            {...register("phone", {
                                                required: {
                                                    value: true,
                                                    message: 'phone is Required'
                                                }
                                            })}
                                        />

                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Facebook </label>
                                        <input
                                            type="text"
                                            name='facebook'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="facebook link"
                                            // required

                                            {...register("facebook", {

                                            })}
                                        />

                                    </div>

                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Twitter</label>
                                        <input
                                            type="text"
                                            name='twitter'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="twitter link"
                                            // required

                                            {...register("twitter", {

                                            })}
                                        />

                                    </div>


                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Instagram</label>
                                        <input
                                            type="text"
                                            name='instagram'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="instagram link"
                                            // required

                                            {...register("instagram", {

                                            })}
                                        />

                                    </div>  <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Google</label>
                                        <input
                                            type="text"
                                            name='google'
                                            className="form-control" id="exampleFormControlInput1"
                                            placeholder="google link"
                                            // required

                                            {...register("google", {

                                            })}
                                        />

                                    </div>



                                    <div className="mb-4">
                                        <label for="exampleFormControlTextarea1"
                                            className="form-label">Expert Photo </label>
                                        <input
                                            // type="link"
                                            type="file"
                                            name='img'
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="img.png"
                                            required

                                            {...register("img", {
                                                required: {
                                                    value: true,
                                                    message: 'Image is Required'
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

export default AddExpert;