import React, { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const Chart = ({ donation }) => {
    const [show, setShow] = useState(false);

    // const charts = donation;
    // const allCharts = charts.data;
    // console.log(donation)
    return (



        // <main
        //     className={show ? 'space-toggle' : null}>


        //     <div className='flex m-20'>
        //         <div className='mt-5'>
        //             <h1 className='text-2xl font-bold m-4 text-orange-500'>Month Wise Sell</h1>

        //             <LineChart
        //                 width={500}
        //                 height={300}
        //                 data={donation}

        //                 margin={{
        //                     top: 5,
        //                     right: 30,
        //                     left: 20,
        //                     bottom: 5,
        //                 }}
        //             >
        //                 <CartesianGrid strokeDasharray="3 3" />
        //                 <XAxis dataKey="name" />
        //                 <YAxis />
        //                 <Tooltip />
        //                 <Legend />
        //                 <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
        //                 <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        //             </LineChart>

        //         </div>
        //         <div className='mt-5'>
        //             <h1 className='text-2xl font-bold m-4 text-orange-500'>Investment vs Revenue</h1>
        //             <div className="m-8">
        //                 <BarChart className="mx-auto" width={730} height={250} data={donation}>
        //                     <CartesianGrid strokeDasharray="3 3" />
        //                     <XAxis dataKey="name" />
        //                     <YAxis />
        //                     <Tooltip />
        //                     <Legend />
        //                     <Bar dataKey="amount" fill="#8884d8" />
        //                     <Bar dataKey="revenue" fill="#82ca9d" />
        //                 </BarChart>
        //             </div>
        //         </div>


        //     </div>



        // </main>

        <div className='bg-sky-50'>
            <h1>This is Statics </h1>
            <LineChart className='bg-sky-200 container mx-auto  w-full' width={350} height={400} data={donation}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
            <h1 className='bg-blue-100 p-5 m-5'>All quiz Statistics</h1>
        </div>
    );
};

export default Chart;