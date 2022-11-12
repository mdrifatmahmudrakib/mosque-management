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


function App() {
  return (

    <Routes>
      <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      <Route path="*" element={<Routesin></Routesin>} />
    </Routes>

  );
}
export default App;
