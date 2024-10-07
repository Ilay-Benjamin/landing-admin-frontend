import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet, Redirect } from 'react-router-dom';
import { appDetails, appPages } from '../../config/app/app.config.js';
import classNames from 'classnames';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header';

import '../../assets/css/layouts/EmptyPage/EmptyPage.css';



function EmptyPage(props) {
    const [isSidebarOpen, toggleSidebar] = useState(false);
    return (
        <div className="empty-page">
            <div className="header-container">
                <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </div>
            <div className="main-container">
                <div className="sidebar-container">
                    <Sidebar className='sidebar' page={props.page} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                </div>
                <main className="main-content" style={{
                    padding: 0, margin: 0
                }}>
                    {props.page.buildComponent()}
                </main>
            </div>
        </div>
    );
}


export default EmptyPage;