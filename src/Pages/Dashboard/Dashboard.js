import { faHome, faStream } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import "./Dashboard.css"
import DashNavbar from './DashNavbar/DashNavbar';
import Sidebar from './Sidebar/Sidebar';
const Dashboard = () => {
    return (


        <div className='dashboard'>

            <Sidebar></Sidebar>

            <div className="dashboardContainer">
                <DashNavbar></DashNavbar>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;

// Single Expert details page ( About , Waz ) , Curd
// Single Event details page ( Comment , join : name and email , seat )
// https://preview.themeforest.net/item/alim-islamic-center-wordpress-theme/full_screen_preview/27169562?_ga=2.263720140.1904464235.1670794241-518599790.1634842464&_gac=1.81887588.1668860440.CjwKCAiAmuKbBhA2EiwAxQnt7wnci3vk3VPsNY6Doy5GlPsTyMIXFle7Y8Je-JnHnDPSPVgEOjbb6RoCtd0QAvD_BwE

// Jumah Khutba ( full )
// Prayer Times
// Donation : and update
// Add Expert ( curd )
// Prodile ( Curd )
// Contact us
