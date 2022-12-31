

import { faAssistiveListeningSystems, faBars, faChartBar, faHome, faSignOut, faTachometer, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css"
import { Link, Outlet } from 'react-router-dom';
import useAdmin from "../../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import DashNavbar from "../DashNavbar/DashNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Sidebar = () => {

    const [show, setShow] = useState(false);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);





    return (


        <main className={show ? 'space-toggle' : null}>
            <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className='header-toggle' onClick={() => setShow(!show)}>
                    {/* <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i> */}
                    <FontAwesomeIcon icon={faBars}  ></FontAwesomeIcon>

                </div>
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


                                <Link to="/dashboard/users" className='nav-link' >
                                    <FontAwesomeIcon icon={faUser} />
                                    <span className='nav-link-name'>Manage Users</span>
                                </Link>

                                {/* <Link to="/dashboard/addjamaattime" className='nav-link' >
                                    <FontAwesomeIcon icon={faChartBar} />
                                    <span className='nav-link-name'>Add Jamaat Time</span>
                                </Link> */}
                                <Link to="/dashboard/managejamaat" className='nav-link' >
                                    <FontAwesomeIcon icon={faChartBar} />
                                    <span className='nav-link-name'>Update Jamaat Time</span>
                                </Link>


                                <Link to="/dashboard/addkhutba" className='nav-link' >
                                    <FontAwesomeIcon icon={faChartBar} />
                                    <span className='nav-link-name'>Add Khutba</span>
                                </Link>




                                <Link to="/dashboard/managekhutba" className='nav-link' >
                                    <FontAwesomeIcon icon={faChartBar} />
                                    <span className='nav-link-name'>Add Khutba</span>
                                </Link>


                                <Link to="/dashboard/addscolar" className='nav-link' >
                                    <FontAwesomeIcon icon={faChartBar} />
                                    <span className='nav-link-name'>Add Scolar</span>
                                </Link>



                                <Link to="managecampaign" className='nav-link' >

                                    <FontAwesomeIcon icon={faChartBar} />

                                    <span className='nav-link-name'>Manage Campaign</span>


                                </Link>

                                <Link to="manageevent" className='nav-link' >

                                    <FontAwesomeIcon icon={faChartBar} />
                                    <span className='nav-link-name'>Manage Event</span>

                                </Link>


                            </>
                            }
                            <Link to="profile" className='nav-link' >

                                <FontAwesomeIcon icon={faChartBar} />
                                <span className='nav-link-name'>Profile</span>

                            </Link>




                            <FontAwesomeIcon icon={faSignOut} onClick={handleSignOut} />
                            {

                                <span onClick={handleSignOut}>Logout</span>

                            }


                            {

                                <span className='icon' onClick={handleSignOut}>Logout</span>

                            }



                        </div>
                    </div>

                    {/* <Link to='/logout' className='nav-link'>
                        <i className='fas fa-sign-out nav-link-icon'></i>
                        <span className='nav-link-name'>Logout</span>
                    </Link> */}
                </nav>
            </aside>

            <div className='dashboard mt-4 pt-4'>

                <div className="dashboardContainer">
                    <DashNavbar></DashNavbar>
                    <Outlet></Outlet>
                </div>
            </div>
        </main>
    );
};

export default Sidebar;