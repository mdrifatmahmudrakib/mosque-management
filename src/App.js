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


function App() {
  return (

    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}  >
          <Route path="addcampaign" element={<AddCampaign></AddCampaign>} />
          <Route path="addevent" element={<AddEvent></AddEvent>} />
          <Route path="addnewproduct" element={<AddProduct></AddProduct>} />
          <Route path="managecampaign" element={<ManageCampaign></ManageCampaign>} />
          <Route path="manageevent" element={<ManageEvent></ManageEvent>} />



          <Route path='updatecampaign/:campaignId' element={<UpdateCampaign></UpdateCampaign>}></Route>
          <Route path='updateevent/:id' element={<UpdateEvent></UpdateEvent>}></Route>

        </Route>

        <Route path="*" element={<Routesin></Routesin>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>

  );
}
export default App;
