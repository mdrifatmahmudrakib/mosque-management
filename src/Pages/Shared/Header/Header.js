import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    // const mainMenu = <>
    //     <li><Link to="./home">Home</Link></li>
    //     <li><Link to="./Donare">Donare</Link></li>
    //     <li><Link to="./events">Events</Link></li>
    //     <li><Link to="./scolars">Scolars</Link></li>
    //     <li><Link to="./tilawat">Tilawat</Link></li>
    //     <li><Link to="./features">Features</Link></li>
    //     <li><Link to="./contact">Contact</Link></li>
    // </>
    return (
        // <div class="navbar bg-black sticky top-0 text-white md:px-12 bg-base-100 h-20 z-10">
        //     <div class="navbar-start">
        //         <div class="dropdown">
        //             <label tabindex="0" class="btn btn-black lg:hidden">
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     class="h-5 w-5"
        //                     fill="none"
        //                     viewBox="0 0 24 24"
        //                     stroke="currentColor"
        //                 >
        //                     <path
        //                         stroke-linecap="round"
        //                         stroke-linejoin="round"
        //                         stroke-width="2"
        //                         d="M4 6h16M4 12h8m-8 6h16"
        //                     />
        //                 </svg>
        //             </label>
        //             <ul
        //                 tabindex="0"
        //                 class="menu menu-compact text-black dropdown-content mt-3 md:pr-0 pr-2 p-2 pr-2 shadow bg-base-100 rounded-box w-52"
        //             >
        //                 {mainMenu}
        //             </ul>
        //         </div>
        //         <img className="w-36" src="https://i.ibb.co/hBkDVR6/3-logo.png" alt="" />
        //     </div>
        //     <div class="navbar-center hidden text-black  lg:flex">
        //         <ul class="menu menu-horizontal text-secondary  text-end p-0">
        //             {mainMenu}
        //         </ul>
        //     </div>
        //     <div class="navbar-end">
        //         <button className="btn btn-primary text-white rounded-full hover:btn-secondary hover:text-white">Want To Visite ?</button>
        //     </div>
        // </div>

        <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img height={70} src="https://i.ibb.co/hBkDVR6/3-logo.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle className='text-dark' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='text-dark' id="responsive-navbar-nav">
                    <Nav className="mx-auto ">

                        <Nav.Link className='text-light' as={Link} to="home">Home</Nav.Link>
                        <Nav.Link className='text-light' as={Link} to="donate">Donate</Nav.Link>
                        <Nav.Link className='text-light' as={Link} to="scolar">Scolar</Nav.Link>


                        {/* {
                        user && <>
                            <Nav.Link className='text-light' as={Link} to="manageinventories">Manage Items</Nav.Link>
                            <Nav.Link className='text-light' as={Link} to="additem">Add Item</Nav.Link>

                            <Nav.Link className='text-light' as={Link} to="myitem">My Item</Nav.Link>
                        </>
                    } */}
                    </Nav>
                    <Nav>
                        {/* {
                        user ?
                            <button className='text-light btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Log Out</button>
                            :

                            <Nav.Link className='text-light' as={Link} to="login">
                                Login
                            </Nav.Link>} */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;