import React from 'react';
import { toast } from 'react-toastify';

const Khutba = () => {

    const handleAddKhutba = (event) => {
        event.preventDefault();
        const form = event.target;
        const month = form.month.value;
        const about = form.about.value;
        const speaker = form.speaker.value;
        const link = form.link.value;



        const newKhutba = {
            month,
            about,
            speaker,
            link

        };
        fetch("http://localhost:5000/addKhutba", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                // authorization: bearer ${localStorage.getItem("accessToken")},
            },
            body: JSON.stringify(newKhutba),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Succesfully Added Product");
                    form.reset();


                }
            })
            .catch((er) => console.error(er));
    };

    return (
        <form onSubmit={handleAddKhutba}>
            <div className='container border shadow mt-5 py-3'>
                <div className='row'>
                    <div className="mb-3 mx-auto  col-lg-6 col-sm-12 ">
                        <div >
                            <label
                                for="exampleFormControlInput1"
                                className="form-label">Jummah Khutba Data</label>
                            <input
                                type="datetime-local"
                                name='month'
                                className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div >
                            <label
                                for="exampleFormControlInput1"
                                className="form-label"

                            >About</label>
                            <input
                                type="text"
                                name='about'
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Jummah Khutba About Crisis"

                            />
                        </div>
                        <div >
                            <label

                                for="exampleFormControlInput1"
                                className="form-label">Speaker</label>

                            <input
                                type="text"
                                name='speaker'
                                className="form-control" id="exampleFormControlInput1"
                                placeholder="MD Imtius Ahammed"

                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="exampleFormControlTextarea1"
                                className="form-label">Example textarea</label>
                            <input
                                type="text"
                                name='link'
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="link.mp3"

                            />

                        </div>
                        <button className='btn btn-primary'>Add Khutba</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Khutba;