import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Donate from './Pages/Donate/Donate';
import Header from './Pages/Shared/Header/Header';
import Scolar from './Pages/Scolar/Scolar';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AddCampaign from './Pages/Dashboard/AddCampaign/AddCampaign';
import HelpDetails from './Pages/Home/Help/HelpDetails';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Stack } from 'react-bootstrap';
import Footer from './Pages/Shared/Footer/Footer';
import { useState } from 'react';
import Routesin from './Pages/Routes/Routesin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageCampaign from './Pages/Dashboard/ManageCampaign/ManageCampaign';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateCampaign from './Pages/Dashboard/ManageCampaign/UpdateCampaign';
import AddEvent from './Pages/Dashboard/ManageEvent/AddEvent';
import ManageEvent from './Pages/Dashboard/ManageEvent/ManageEvent';
import UpdateEvent from './Pages/Dashboard/ManageEvent/UpdateEvent';
import User from './Pages/Dashboard/Users/User';
import RequireAuth from './Pages/Login/RequireAuth';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Info from './Pages/Dashboard/Info';
import AddImam from './Pages/Dashboard/AddImam';
import AddExpert from './Pages/Dashboard/ManageExpert/AddExpert';
import Khutba from './Pages/Dashboard/Khutba/Khutba';
import Side from './Pages/Dashboard/Side/Side';
import Sidebar from './Pages/Dashboard/Sidebar/Sidebar';
import ManageKhutba from './Pages/Dashboard/Khutba/ManageKhutba';
import TestUpdate from './Pages/Dashboard/ManageCampaign/TestUpdate';
import { Toaster } from 'react-hot-toast';
import AddJamaatTime from './Pages/Dashboard/ManageJamaatTime/AddJamaatTime';
import ManageJamaatTime from './Pages/Dashboard/ManageJamaatTime/ManageJamaatTime';
import UpdateJamaatTime from './Pages/Dashboard/ManageJamaatTime/UpdateJamaatTime';
import ManageExpert from './Pages/Dashboard/ManageExpert/ManageExpert';
import UpdateExpert from './Pages/Dashboard/ManageExpert/UpdateExpert';
import AllUserDonation from './Pages/Dashboard/AllUserDonation/AllUserDonation';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import Testdash from './Pages/Dashboard/MainDashboard';
import MainDashboard from './Pages/Dashboard/MainDashboard';

function App() {
  return (

    <div>
      <Routes>
        <Route path="/dashboard" element={<MainDashboard></MainDashboard>} >

          <Route path="/dashboard" element={<RequireAdmin><Sidebar></Sidebar></RequireAdmin>} />
          <Route path="addcampaign" element={<AddCampaign></AddCampaign>} />
          <Route path="users" element={<RequireAdmin> <User></User> </RequireAdmin>} />
          <Route path="addevent" element={<RequireAdmin><AddEvent></AddEvent></RequireAdmin>} />
          <Route path="addnewproduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>} />


          <Route path="managecampaign" element={<RequireAdmin><ManageCampaign></ManageCampaign></RequireAdmin>} />
          <Route path="manageevent" element={<RequireAdmin><ManageEvent></ManageEvent></RequireAdmin>} />
          <Route path="managekhutba" element={<RequireAdmin><ManageKhutba></ManageKhutba></RequireAdmin>} />

          <Route path="managejamaat" element={<RequireAdmin><ManageJamaatTime></ManageJamaatTime></RequireAdmin>} />


          <Route path="manageexperts" element={<RequireAdmin><ManageExpert></ManageExpert></RequireAdmin>} />

          <Route path="experts/:id" element={<RequireAdmin><UpdateExpert></UpdateExpert></RequireAdmin>} />





          <Route path="profile" element={<Info></Info>} />
          <Route path="updateprofile/:email" element={<UpdateProfile></UpdateProfile>} />

          <Route path="imam" element={<RequireAdmin><AddImam></AddImam></RequireAdmin>} />
          <Route path="addscolar" element={<RequireAdmin><AddExpert></AddExpert></RequireAdmin>} />

          <Route path="addkhutba" element={<RequireAdmin><Khutba></Khutba></RequireAdmin>} />
          <Route path="addjamaattime" element={<RequireAdmin><AddJamaatTime></AddJamaatTime></RequireAdmin>} />



          <Route path='updatecampaign/:id' element={<RequireAdmin><UpdateCampaign></UpdateCampaign></RequireAdmin>}></Route>



          <Route path='updateevent/:id' element={<RequireAdmin><UpdateEvent></UpdateEvent></RequireAdmin>}></Route>

          <Route path='jamaattime/:id' element={<RequireAdmin><UpdateJamaatTime></UpdateJamaatTime></RequireAdmin>}></Route>


          <Route path='alluserdonation' element={<RequireAdmin><AllUserDonation></AllUserDonation></RequireAdmin>}></Route>

        </Route>




        <Route path="*" element={<Routesin></Routesin>} />
      </Routes>
      <Toaster></Toaster>
      <ToastContainer></ToastContainer>

    </div>

  );
}
export default App;
