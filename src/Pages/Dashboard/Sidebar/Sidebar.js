

import { faAssistiveListeningSystems, faBars, faCalendarDay, faChartBar, faDonate, faHandHoldingDollar, faHome, faMusic, faPeopleGroup, faPray, faSignOut, faTachometer, faUser, faUsersCog, faXmark } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css"
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import useAdmin from "../../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import DashNavbar from "../DashNavbar/DashNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Chart from './Chart';

const Sidebar = () => {

    const [show, setShow] = useState(false);

    // const handleSignOut = () => {
    //     signOut(auth);
    //     localStorage.removeItem('accessToken');
    // }

    const navigate = useNavigate();


    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate("/login")
    }

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);




    // const data = [
    //     {
    //         "month": "Mar",
    //         "investment": 100000,
    //         "sell": 241,
    //         "revenue": 10401
    //     },
    //     {
    //         "month": "Apr",
    //         "investment": 200000,
    //         "sell": 423,
    //         "revenue": 24500
    //     },
    //     {
    //         "month": "May",
    //         "investment": 500000,
    //         "sell": 726,
    //         "revenue": 67010
    //     },
    //     {
    //         "month": "Jun",
    //         "investment": 500000,
    //         "sell": 529,
    //         "revenue": 40405
    //     },
    //     {
    //         "month": "Jul",
    //         "investment": 600000,
    //         "sell": 601,
    //         "revenue": 50900
    //     },
    //     {
    //         "month": "Aug",
    //         "investment": 700000,
    //         "sell": 670,
    //         "revenue": 61000
    //     }
    // ]


    // const [user] = useAuthState(auth)
    // console.log(user)

    const [allDonation, setAllDonation] = useState([]);
    useEffect(() => {
        fetch(`https://mosque-management-server.vercel.app/checkout/true`)
            .then(res => res.json())
            .then(data => setAllDonation(data))
        console.log(allDonation);
    }, [user?.email])

    const data = allDonation;
    return (

        // <>
        //     {allDonation.map(donation => <Chart
        //         donation={donation}
        //         key={donation._id}
        //     >

        //     </Chart>

        //     )}

        // </>


        <main
            className={show ? 'space-toggle' : null}>


            <div className='flex m-20'>
                <div className='mt-5'>
                    <h1 className='text-2xl font-bold m-4 text-orange-500'>Campaign Wise Donation</h1>

                    <LineChart
                        width={500}
                        height={300}
                        data={data}

                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="campaignname" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    </LineChart>

                </div>
                <div className='mt-5'>
                    <h1 className='text-2xl font-bold m-4 text-orange-500'>Campaign Wise Donation</h1>
                    <div className="m-8">
                        <BarChart className="mx-auto" width={730} height={250} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="campaignname" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amount" fill="#8884d8" />
                            <Bar dataKey="revenue" fill="#82ca9d" />
                        </BarChart>
                    </div>
                </div>


            </div>



        </main>

    );
};

export default Sidebar;