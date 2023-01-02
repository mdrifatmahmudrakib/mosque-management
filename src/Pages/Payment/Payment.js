import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51LXB94DzzWrIfioB2bNG9DoBZz5O5Nj8WrAmB6O2EZQwjS7JhrJtXR2H5Ji6ai3JQ2WfeDHXBz2SeEIV17xtdp8600sEQjg22k');

const Payment = () => {
    const { id } = useParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const { isLoading, error, data } = useQuery({
        queryKey: ['grant-info'],
        queryFn: () =>
            fetch(`https://mosque-management-server.vercel.app/grant-info/${id}`).then(res =>
                res.json()
            )
    })

    if (isLoading) return <Loading />
    console.log(data);

    return (
        <div className='m-5 grid justify-center'>
            <div>
                <h2 className='text-info'>Please pay from here: {id}</h2>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Hi, <b>{data.name}</b> </Card.Title>
                        <Card.Text>
                            We are so happy that you want to grant <b>${data.amount}</b> to our forum. <b>Thank you!</b>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm datas={data} />
                </Elements>

            </div>
        </div>
    );
};

export default Payment;