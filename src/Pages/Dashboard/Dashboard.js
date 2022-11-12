import { faHome, faStream } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Dashboard.css"
const Dashboard = () => {
    return (
        // <div className='h-4'>
        //     <aside className="navbar-aside mt-4" id="offcanvas_aside">
        //         <div className="aside-top">
        //             <Link to="/" className="brand-wrap">
        //                 <img
        //                     src="https://i.ibb.co/hBkDVR6/3-logo.png"
        //                     style={{ height: "46" }}
        //                     className="logo"
        //                     alt="Ecommerce dashboard template"
        //                 />
        //             </Link>
        //             <div>
        //                 <button className="btn btn-icon btn-aside-minimize">
        //                     <i className="text-muted fas fa-stream"></i>
        //                     <FontAwesomeIcon icon={faStream} className="text-muted " />
        //                 </button>
        //             </div>
        //         </div>

        //         <nav>
        //             <ul className="menu-aside">
        //                 <li className="menu-item">
        //                     <NavLink
        //                         activeClassName="active"
        //                         className="menu-link"
        //                         to="/"
        //                         exact={true}
        //                     >
        //                         <i className="icon fas fa-home"></i>
        //                         <FontAwesomeIcon icon={faHome} className="text-muted " />
        //                         <span className="text">Dashboard</span>
        //                     </NavLink>
        //                 </li>
        //                 <li className="menu-item">
        //                     <NavLink
        //                         activeClassName="active"
        //                         className="menu-link"
        //                         to="/products"
        //                     >
        //                         <i className="icon fas fa-shopping-bag"></i>
        //                         <span className="text">Products</span>
        //                     </NavLink>
        //                 </li>
        //                 <li className="menu-item">
        //                     <NavLink
        //                         activeClassName="active"
        //                         className="menu-link"
        //                         to="/addproduct"
        //                     >
        //                         <i className="icon fas fa-cart-plus"></i>
        //                         <span className="text">Add product</span>
        //                     </NavLink>
        //                 </li>
        //                 <li className="menu-item">
        //                     <NavLink
        //                         activeClassName="active"
        //                         className="menu-link"
        //                         to="/category"
        //                     >
        //                         <i className="icon fas fa-list"></i>
        //                         <span className="text">Categories</span>
        //                     </NavLink>
        //                 </li>
        //                 <li className="menu-item">
        //                     <NavLink
        //                         activeClassName="active"
        //                         className="menu-link"
        //                         to="/orders"
        //                     >
        //                         <i className="icon fas fa-bags-shopping"></i>
        //                         <span className="text">Orders</span>
        //                     </NavLink>
        //                 </li>
        //                 <li className="menu-item">
        //                     <NavLink
        //                         activeClassName="active"
        //                         className="menu-link"
        //                         to="/users"
        //                     >
        //                         <i className="icon fas fa-user"></i>
        //                         <span className="text">Users</span>
        //                     </NavLink>
        //                 </li>
        //                 <li className="menu-item">
        //                     <NavLink
        //                         activeClassName="active"
        //                         className="menu-link disabled"
        //                         to="/sellers"
        //                     >
        //                         <i className="icon fas fa-store-alt"></i>
        //                         <span className="text">Sellers</span>
        //                     </NavLink>
        //                 </li>

        //                 <li className="menu-item">
        //                     <NavLink
        //                         activeClassName="active"
        //                         className="menu-link disabled"
        //                         to="/transaction"
        //                     >
        //                         <i className="icon fas fa-usd-circle"></i>
        //                         <span className="text">Transactions</span>
        //                     </NavLink>
        //                 </li>
        //             </ul>
        //             <br />
        //             <br />
        //         </nav>
        //     </aside>
        // </div>

        <div>
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
        </div>
    );
};

export default Dashboard;