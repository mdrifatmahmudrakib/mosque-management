// import React from 'react';
// import { toast } from 'react-toastify';
// import "./AddProduct.css"
// const AddProduct = () => {

//     const handleAddKhutba = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const month = form.month.value;
//         const about = form.about.value;
//         const speaker = form.speaker.value;
//         const link = form.link.value;



//         const newKhutba = {
//             month,
//             about,
//             speaker,
//             link

//         };
//         fetch("https://mosque-management-server.vercel.app/addKhutba", {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json",
//                 // authorization: bearer ${localStorage.getItem("accessToken")},
//             },
//             body: JSON.stringify(newKhutba),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 if (data.acknowledged) {
//                     toast.success("Succesfully Added Product");
//                     form.reset();


//                 }
//             })
//             .catch((er) => console.error(er));
//     };

//     return (
//         <>
//             <section className="content-main" style={{ maxWidth: "1200px" }}>
//                 <form onSubmit={handleAddKhutba}>
//                     <div className="content-header">
//                         {/* <Link to="" className="btn btn-danger text-white">
//                 Go to products
//               </Link> */}
//                         <button className='btn btn-danger text-white'>Go to Products</button>
//                         <h2 className="content-title">Add product</h2>
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

//                                             type="datetime-local"
//                                             name='month'
//                                             className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"

//                                             required
//                                         />
//                                     </div>


//                                     <div className="mb-4">
//                                         <label for="exampleFormControlTextarea1"
//                                             className="form-label">Add Description</label>
//                                         <textarea

//                                             type="text"
//                                             name='about'
//                                             className="form-control" id="exampleFormControlInput1" placeholder="Jummah Khutba About Crisis"
//                                             rows="7"


//                                             required
//                                         ></textarea>
//                                     </div>

//                                     <div className="mb-4">
//                                         <label for="exampleFormControlTextarea1"
//                                             className="form-label">Item Photo </label>
//                                         <input
//                                             type="text"
//                                             name='speaker'
//                                             className="form-control" id="exampleFormControlInput1"
//                                             placeholder="MD Imtius Ahammed"
//                                             required
//                                         />

//                                     </div>

//                                     <div className="mb-4">
//                                         <label for="exampleFormControlTextarea1"
//                                             className="form-label">Item Photo </label>
//                                         <input
//                                             type="text"
//                                             name='link'
//                                             className="form-control"
//                                             id="exampleFormControlInput1"
//                                             placeholder="link.mp3"
//                                             required
//                                         />

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </section>
//         </>
//     );
// };

// export default AddProduct;