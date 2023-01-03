import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

import "./Header.css"
import useAdmin from '../../../hooks/useAdmin';
const Header = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
        navigate("/login")
    }

    const [admin] = useAdmin(user);
    return (


        <Navbar className='d-print-none'
            collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">

            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img height={100} src="https://i.ibb.co/WgNvdgG/Mosque-orange-and-red-logo-design-1.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle className='text-dark' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='text-dark' id="responsive-navbar-nav">
                    <Nav className="mx-auto ">

                        <Nav.Link className='text-light' as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className='text-light' as={Link} to="donate">Campaigns</Nav.Link>
                        <Nav.Link className='text-light' as={Link} to="events">Events</Nav.Link>
                        <Nav.Link className='text-light' as={Link} to="allexperts">Experts</Nav.Link>
                        <Nav.Link className='text-light' as={Link} to="khutba">Khutba</Nav.Link>

                        {/* <Nav.Link className='text-light' as={Link} to="dashboard">Dashboard</Nav.Link> */}
                        {
                            admin ? <>
                                <Nav.Link className='text-light' as={Link} to="dashboard">Dashboard</Nav.Link> </>
                                :
                                <>

                                </>



                        }
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <>
                                    <Nav.Link className='text-light' as={Link} to="/dashboard/profile">Profile </Nav.Link>
                                    <Nav.Link className=' btn btn-warning text-black ' onClick={handleSignOut}>Log Out</Nav.Link>
                                </>

                                :


                                <Nav.Link className='text-light' as={Link} to="login">
                                    Login
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;