import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Donate from './Pages/Donate/Donate';
import Header from './Pages/Shared/Header/Header';
import Scolar from './Pages/Scolar/Scolar';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AddCampaign from './Pages/Dashboard/AddCampaign/AddCampaign';
import HelpDetails from './Pages/Home/Help/HelpDetails';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/donate' element={<Donate></Donate>}></Route>
        <Route path='/scolar' element={<Scolar></Scolar>}></Route>


        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/addcampaign" element={<AddCampaign></AddCampaign>}></Route>


        <Route path='/campaign/:campaignId' element={
          <HelpDetails></HelpDetails>}></Route>

      </Routes>

    </div>
  );
}

export default App;
