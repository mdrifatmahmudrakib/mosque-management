import { faAssistiveListeningSystems, faBars, faChartBar, faHome, faSignOut, faTachometer, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import DashNavbar from '../DashNavbar/DashNavbar';
import Sidebar from '../Sidebar/Sidebar';
// import "./Side.css"
const Side = () => {
    // const [isExpanded, setExpendState] = useState(false);
    // const menuItems = [
    //     {
    //         text: "Dashboard",
    //         // icon: "icons/grid.svg",
    //     },
    //     // {
    //     //     text: "Admin Profile",
    //     //     // icon: "icons/user.svg",
    //     // },
    //     // {
    //     //     text: "Messages",
    //     //     // icon: "icons/message.svg",
    //     // },
    //     // {
    //     //     text: "Analytics",
    //     //     // icon: "icons/pie-chart.svg",
    //     // },
    //     // {
    //     //     text: "File Manager",
    //     //     // icon: "icons/folder.svg",
    //     // },
    //     // {
    //     //     text: "Orders",
    //     //     // icon: "icons/shopping-cart.svg",
    //     // },
    //     // {
    //     //     text: "Saved Items",
    //     //     // icon: "icons/heart.svg",
    //     // },
    //     {
    //         text: "Settings",
    //         link: "/donate"
    //         // icon: "icons/settings.svg",
    //     },
    // ];

    const [show, setShow] = useState(false);
    const handleSignOut = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
    }

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        // <div
        //     className={
        //         isExpanded
        //             ? "side-nav-container"
        //             : "side-nav-container side-nav-container-NX"
        //     }
        // >
        //     <div className="nav-upper">
        //         <div className="nav-heading">
        //             {isExpanded && (
        //                 <div className="nav-brand">
        //                     <img src="icons/Logo.svg" alt="" />
        //                     <h2>Showkart</h2>
        //                 </div>
        //             )}
        //             <button
        //                 className={
        //                     isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
        //                 }
        //                 onClick={() => setExpendState(!isExpanded)}
        //             >
        //                 <span></span>
        //                 <span></span>
        //                 <span></span>
        //             </button>
        //         </div>
        //         <div className="nav-menu">
        //             {menuItems.map(({ text, icon, link }) => (
        //                 <Link key={text}
        //                     className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
        //                     to={link}
        //                 >
        //                     <img className="menu-item-icon" src={icon} alt="" />
        //                     {isExpanded && <p>{text}</p>}
        //                 </Link>
        //             ))}

        //         </div>
        //     </div>
        //     <div className="nav-footer">
        //         {isExpanded && (
        //             <div className="nav-details">
        //                 <img
        //                     className="nav-footer-avatar"
        //                     src="icons/admin-avatar.svg"
        //                     alt=""

        //                 />
        //                 <div className="nav-footer-info">
        //                     <p className="nav-footer-user-name">M Showkat</p>
        //                     <p className="nav-footer-user-position">store admin</p>
        //                 </div>
        //             </div>
        //         )}
        //         <img className="logout-icon" src="icons/logout.svg" alt="" />
        //     </div>
        // </div>

        <main className={show ? 'space-toggle' : null}>
            <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className='header-toggle' onClick={() => setShow(!show)}>
                    {/* <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i> */}
                    <FontAwesomeIcon icon={faBars}  ></FontAwesomeIcon>

                </div>
            </header>

            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className='nav'>
                    <div>
                        <Link to='/' className='nav-logo'>
                            {/* <i className={`fas fa-home-alt nav-logo-icon`}></i> */}
                            <FontAwesomeIcon className='nav-logo-icon' icon={faHome} />
                            <span className='nav-logo-name'>Homepage</span>
                        </Link>

                        <div className='nav-list'>

                            {admin && <>
                                <Link to='/side' className='nav-link active'>
                                    <FontAwesomeIcon className="nav-link-icon" icon={faTachometer} />
                                    {/* <i className='fas fa-tachometer-alt nav-link-icon'></i> */}
                                    <span className='nav-link-name'>Dashboard</span>
                                </Link>


                                <Link to="/side/users" className='nav-link' >
                                    <FontAwesomeIcon icon={faUser} />
                                    <span className='nav-link-name'>User</span>
                                </Link>

                                <Link to="/side/users" className='nav-link' >
                                    <FontAwesomeIcon icon={faChartBar} />
                                    <span className='nav-link-name'>AddImam</span>
                                </Link>


                                <Link to="/side/addkhutba" className='nav-link' >
                                    <FontAwesomeIcon icon={faChartBar} />
                                    <span className='nav-link-name'>Add Khutba</span>
                                </Link>


                                <Link to="/side/addscolar" className='nav-link' >
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



                            <li>
                                <FontAwesomeIcon icon={faSignOut} onClick={handleSignOut} />
                                {

                                    <span onClick={handleSignOut}>Logout</span>

                                }
                            </li>

                            {

                                <span className='icon' onClick={handleSignOut}>Logout</span>

                            }



                        </div>
                    </div>

                    <Link to='/logout' className='nav-link'>
                        <i className='fas fa-sign-out nav-link-icon'></i>
                        <span className='nav-link-name'>Logout</span>
                    </Link>
                </nav>
            </aside>

            <div className='dashboard'>

                <div className="dashboardContainer">
                    <DashNavbar></DashNavbar>
                    <Outlet></Outlet>
                </div>
            </div>
        </main>
    );
};

export default Side;