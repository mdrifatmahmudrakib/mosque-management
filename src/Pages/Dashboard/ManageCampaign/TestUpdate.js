// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const TestUpdate = () => {

//     const imageStorageKey = '66d703a3620cbf4048028b3360c26490';

//     const { register, formState: { errors }, handleSubmit, reset } = useForm();
//     const [updateItem, setUpdateItem] = useState({});
//     const { id } = useParams();

//     useEffect(() => {
//         fetch(`https://mosque-management.onrender.com/campaign/${id}`)
//             .then(res => res.json())
//             .then(result => {
//                 setUpdateItem(result);
//                 console.log(result)
//             })
//     }, [id])


//     const handleAddCampaign = async data => {
//         const img = data.img[0];
//         const formData = new FormData();
//         formData.append('image', img);
//         const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
//         fetch(url, {
//             method: 'POST',
//             body: formData
//         })
//             .then(res => res.json())
//             .then(result => {
//                 if (result.success) {
//                     const img = result.data.url;
//                     const imam = {
//                         name: data.name,
//                         Goal: data.Goal,
//                         Raised: data.Raised,
//                         email: data.email,
//                         short_description: data.short_description,
//                         img: img
//                     }
//                     console.log(imam)
//                     // send to your database
//                     fetch(`https://mosque-management.onrender.com/campaign/${id}`, {
//                         method: 'PUT',
//                         headers: {
//                             'content-type': 'application/json',
//                             authorization: `Bearer ${localStorage.getItem('accessToken')}`
//                         },
//                         body: JSON.stringify(imam)

//                     })
//                         .then(res => res.json())
//                         .then(inserted => {

//                             toast.success('Imam added successfully')



//                         })

//                 }

//             })
//     }



//     return (

//         <>
//             <section className="content-main " style={{ maxWidth: "1200px" }}>
//                 <form onSubmit={handleSubmit(handleAddCampaign)} >
//                     <div className="content-header">
//                         {/* <Link to="" className="btn btn-danger text-white">
// Go to products
// </Link> */}
//                         <button className='btn btn-danger text-white'>Go to Campaigns</button>
//                         <h2 className="content-title">Add Campaign</h2>
//                         <div>
//                             <button type="submit" className=" btn btn-warning">
//                                 Publish now
//                             </button>
//                         </div>
//                     </div>

//                     <div className="row mb-4">
//                         <div className="col-xl-8 col-lg-8">
//                             <div className="card mb-4 shadow-sm">
//                                 <div className="card-body">
//                                     <div className="mb-4">
//                                         <label htmlFor="product_title" for="exampleFormControlTextarea1"
//                                             className="form-label">
//                                             Campaign Name
//                                         </label>
//                                         <input
//                                             defaultValue={updateItem.name}
//                                             type="text"
//                                             // name='name'
//                                             className="form-control" id="exampleFormControlInput1" placeholder="Add your Campaign Name "



//                                             {...register("name", {
//                                                 required: {
//                                                     value: true,

//                                                     message: 'Name is Required'
//                                                 }
//                                             })}


//                                         />
//                                     </div>


//                                     <div className="mb-4">
//                                         <label for="exampleFormControlTextarea1"
//                                             className="form-label">Campaign Details</label>
//                                         <textarea
//                                             defaultValue={updateItem.short_description}
//                                             type="text"
//                                             // name='short_description'
//                                             className="form-control" id="exampleFormControlInput1" placeholder="Jummah Khutba About Crisis"
//                                             rows="7"





//                                             {...register("short_description", {
//                                                 required: {
//                                                     value: true,

//                                                     message: 'Name is Required'
//                                                 }
//                                             })}
//                                         ></textarea>
//                                     </div>

//                                     <div className="mb-4">
//                                         <label for="exampleFormControlTextarea1"
//                                             className="form-label">Amout Rise </label>
//                                         <input
//                                             defaultValue={updateItem.Raised}

//                                             type="number"
//                                             name='Raised'
//                                             className="form-control" id="exampleFormControlInput1"
//                                             placeholder="MD Imtius Ahammed"


//                                             {...register("Raised", {
//                                                 required: {
//                                                     value: true,
//                                                     message: 'Number is Required'
//                                                 }
//                                             })}
//                                         />

//                                     </div>

//                                     <div className="mb-4">
//                                         <label for="exampleFormControlTextarea1"
//                                             className="form-label">Goal</label>
//                                         <input


//                                             type="number"
//                                             // name='Goal'
//                                             className="form-control" id="exampleFormControlInput1"
//                                             placeholder="MD Imtius Ahammed"

//                                             {...register("Goal", {

//                                                 required: {
//                                                     value: true,
//                                                     message: 'Number is Required'

//                                                 }
//                                             })} defaultValue={updateItem.Goal}
//                                         />

//                                     </div>

//                                     <div className="mb-4">
//                                         <label for="exampleFormControlTextarea1"
//                                             className="form-label">Upload Campaign Photo </label>
//                                         <input
//                                             defaultValue={updateItem.img}

//                                             // type="link"
//                                             type="file"
//                                             // name='img'
//                                             className="form-control"
//                                             id="exampleFormControlInput1"
//                                             placeholder="link.mp3"
//                                             required

//                                             {...register("img", {
//                                                 required: {
//                                                     value: true,
//                                                     message: 'Image is Required'
//                                                 }
//                                             })}

//                                         />
//                                         <label className="label">
//                                             {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
//                                         </label>
//                                     </div>


//                                 </div>

//                             </div>
//                             <button type="submit" className=" btn btn-warning">
//                                 Publish now
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </section>
//         </>

//     );
// };

// export default TestUpdate;