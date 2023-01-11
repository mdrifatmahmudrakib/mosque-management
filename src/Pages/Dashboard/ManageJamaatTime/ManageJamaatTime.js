import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import SingleJamaatTime from './SingleJamaatTime';

const ManageJamaatTime = () => {




    const [jamaattime, setJamaattime] = useState([])

    useEffect(() => {
        fetch('https://mosque-management.onrender.com/jamaattime')
            .then(res => res.json())
            .then(data => setJamaattime(data))
    }, [jamaattime, setJamaattime])








    return (



        <>


            <section className="content-main " style={{ maxWidth: "1200px" }}>
                {
                    jamaattime?.map(jamaat => <SingleJamaatTime
                        key={jamaat._id}
                        jamaat={jamaat}
                    >
                    </SingleJamaatTime>

                    )
                }
            </section>



        </>



    );
};

export default ManageJamaatTime;