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


function App() {
  return (

    <div>
      <Routes>
        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}  >
          <Route path="addcampaign" element={<AddCampaign></AddCampaign>} />
          <Route path="users" element={<RequireAdmin> <User></User> </RequireAdmin>} />
          <Route path="addevent" element={<RequireAdmin><AddEvent></AddEvent></RequireAdmin>} />
          <Route path="addnewproduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>} />
          <Route path="managecampaign" element={<RequireAdmin><ManageCampaign></ManageCampaign></RequireAdmin>} />
          <Route path="manageevent" element={<RequireAdmin><ManageEvent></ManageEvent></RequireAdmin>} />

          <Route path="profile" element={<Info></Info>} />

          <Route path="imam" element={<RequireAdmin><AddImam></AddImam></RequireAdmin>} />
          <Route path="addscolar" element={<RequireAdmin><AddExpert></AddExpert></RequireAdmin>} />



          <Route path='updatecampaign/:campaignId' element={<RequireAdmin><UpdateCampaign></UpdateCampaign></RequireAdmin>}></Route>
          <Route path='updateevent/:id' element={<RequireAdmin><UpdateEvent></UpdateEvent></RequireAdmin>}></Route>

        </Route>

        <Route path="*" element={<Routesin></Routesin>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>

  );
}
export default App;
