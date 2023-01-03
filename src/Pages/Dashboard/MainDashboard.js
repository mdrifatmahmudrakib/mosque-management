import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import DashNavbar from './DashNavbar/DashNavbar';
import "./MainDashboard.css"

import { faAssistiveListeningSystems, faBars, faCalendarDay, faChartBar, faDonate, faHandHoldingDollar, faHome, faMusic, faPeopleGroup, faPray, faSignOut, faTachometer, faUser, faUsersCog, faXmark } from '@fortawesome/free-solid-svg-icons';

const MainDashboard = () => {
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
        // localStorage.removeItem('accessToken');
        navigate("/login")
    }

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);


    return (




        <main className={show ? 'space-toggle' : null}>

            <div>


                <header className={`header ${show ? 'space-toggle' : null}`}>
                    <div className='header-toggle' onClick={() => setShow(!show)}>
                        {/* <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i> */}
                        <FontAwesomeIcon icon={faBars}  ></FontAwesomeIcon>

                    </div>
                    <h4 ><FontAwesomeIcon icon={faUser} className="me-2" />{user ? user?.displayName : "name"}</h4>
                </header>

                <aside className={`sidebar ${show ? 'show' : null}`}>
                    <nav className='nav test'>
                        <div className="test">
                            <Link to='/' className='nav-logo'>
                                {/* <i className={`fas fa-home-alt nav-logo-icon`}></i> */}
                                <FontAwesomeIcon className='nav-logo-icon' icon={faHome} />
                                <span className='nav-logo-name'>Homepage</span>
                            </Link>

                            <div className='nav-list'>

                                {admin && <>
                                    <Link to='/dashboard' className='nav-link active'>
                                        <FontAwesomeIcon icon={faTachometer} />
                                        {/* <i className='fas fa-tachometer-alt nav-link-icon'></i> */}
                                        <span className='nav-link-name'>Dashboard</span>
                                    </Link>

                                    <Link to="alluserdonation" className="nav-link">
                                        <FontAwesomeIcon icon={faDonate} />
                                        <span className="nav-link-name">All Donations</span>
                                    </Link>

                                    <Link to="/dashboard/users" className='nav-link' >
                                        <FontAwesomeIcon icon={faUsersCog} />
                                        <span className='nav-link-name'>Manage Users</span>
                                    </Link>


                                    <Link to="/dashboard/managejamaat" className='nav-link' >
                                        <FontAwesomeIcon icon={faPray} />
                                        <span className='nav-link-name'>Update Jamaat Time</span>
                                    </Link>



                                    <Link to="/dashboard/managekhutba" className='nav-link' >
                                        <FontAwesomeIcon icon={faMusic} />
                                        <span className='nav-link-name'>Manage Khutba</span>
                                    </Link>




                                    <Link to="/dashboard/manageexperts" className="nav-link">
                                        <FontAwesomeIcon icon={faPeopleGroup} />
                                        <span className="nav-link-name">Manage Expert</span>
                                    </Link>


                                    <Link to="managecampaign" className='nav-link' >

                                        <FontAwesomeIcon icon={faHandHoldingDollar} />

                                        <span className='nav-link-name'>Manage Campaign</span>


                                    </Link>

                                    <Link to="manageevent" className='nav-link' >

                                        <FontAwesomeIcon icon={faCalendarDay} />
                                        <span className='nav-link-name'>Manage Event</span>

                                    </Link>


                                </>
                                }
                                <Link to="profile" className='nav-link' >

                                    <FontAwesomeIcon icon={faUser} />
                                    <span className='nav-link-name'>Profile</span>

                                </Link>

                                {
                                    user ?


                                        <Link className='nav-link' onClick={handleSignOut}>

                                            <FontAwesomeIcon className='nav-logo-icon ' icon={faSignOut} />
                                            <h5 className='nav-link-name fw-bold  '>Log Out</h5>

                                        </Link>

                                        :


                                        navigate("/login")







                                }



                                {/* <Link className='nav-link bg-warning' onClick={handleSignOut}>
                    <FontAwesomeIcon className='nav-logo-icon mr-2 ' onClick={handleSignOut} icon={faSignOut} />

                    <span className='nav-link-name text-black' onClick={handleSignOut}>Sign Out</span>

                </Link> */}




                                {/* <FontAwesomeIcon icon={faSignOut} onClick={handleSignOut} />
                {

                    <span onClick={handleSignOut}>Logout</span>

                } */}


                                {/* 
                 <Link to='/' className='nav-logo '>
                    
                    <button className='btn btn-warning'>  <FontAwesomeIcon className='nav-logo-icon mr-2 ' icon={faSignOut} />Sign Out </button>
                </Link>  */}


                            </div>
                        </div>


                    </nav>
                </aside>

                <div className='dashboard mt-4 pt-4'>

                    <div className="dashboardContainer">
                        <DashNavbar></DashNavbar>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>



        </main>




    );
};

export default MainDashboard;