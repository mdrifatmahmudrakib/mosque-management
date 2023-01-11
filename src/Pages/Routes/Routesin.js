import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Donate from '../Donate/Donate';
import EventDetails from '../Home/Event/EventDetails';
import Event from '../Home/Event/Event';
import HelpDetails from '../Home/Help/HelpDetails';
import Home from '../Home/Home';
import Login from '../Login/Login/Login';
import Register from '../Login/Register/Register';

import Scolar from '../Scolar/Scolar';
import Header from '../Shared/Header/Header';
import Info from '../../Pages/Dashboard/Info';
import Payment from '../Payment/Payment';
import Side from '../Dashboard/Side/Side';
import ListenKhutba from '../ListenKhutba/ListenKhutba';

import Footer from '../Shared/Footer/Footer';
import RequireAuth from '../Login/RequireAuth';
import UserDonation from '../UserDonation/UserDonation';
import DonationFail from '../Home/Help/DonationFail';
import DonationSuccess from '../Home/Help/DonationSuccess';


const Routesin = () => {
    return (
        <div className="App">
            <React.Fragment />
            <nav>
                <Header></Header>
            </nav>
            <Routes>


                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/info" element={<Info></Info>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/side" element={<Side></Side>}></Route>
                <Route path='/donate' element={<Donate></Donate>}></Route>
                <Route path='/events' element={<Event></Event>}></Route>
                <Route path='/allexperts' element={<Scolar></Scolar>}></Route>
                <Route path='/khutba' element={<ListenKhutba></ListenKhutba>}></Route>


                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>



                <Route path="/payment/:id" element={<Payment></Payment>}></Route>


                <Route path='/campaign/:id' element={
                    <RequireAuth><HelpDetails></HelpDetails></RequireAuth>}></Route>

                <Route path='/event/:id' element={<RequireAuth><EventDetails></EventDetails></RequireAuth>
                }></Route>

                <Route path="/donation/success" element={<DonationSuccess></DonationSuccess>}></Route>
                <Route path="/donation/fail" element={<DonationFail></DonationFail>}></Route>
                <Route path="/userDonation" element={<UserDonation></UserDonation>}></Route>




            </Routes>
            <Footer></Footer>
            <React.Fragment />
        </div>
    );
}

export default Routesin;