import React from 'react';
import { useState } from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet, Redirect} from 'react-router-dom';
import classNames from 'classnames';
import { appDetails, appPages} from '../config/app/app.config.js';
import profilePicture from '../assets/images/icons/profile_picture.png'; // Assuming you have a profile picture
import yoavLogo from '../assets/images/icons/yoav_logo.jpg'; // Assuming you have a logo
import searchIcon from '../assets/images/icons/search.png'; // Assuming you have a search icon
import homeIcon from '../assets/images/icons/home.png'
import rightArrowIcon from '../assets/images/icons/right-arrow.png';
import leftArrowIcon from '../assets/images/icons/left-arrow.png';

import '../assets/css/components/Header.css'; // Assuming you have styles for Header



function Header(props) {
  const isSidebarOpen = props.isSidebarOpen;
  const toggleSidebar = props.toggleSidebar;
  const toggleSidebarIcon = isSidebarOpen ? leftArrowIcon : rightArrowIcon;
  const onToggleSidebarHandler = (target) => {
    target.preventDefault();
    toggleSidebar(!isSidebarOpen);
  }
    return (
    <header className="header-content">
      <div className={classNames('header-section', 'start-section')}>
        <div className={classNames('icon-button' , "menu-button")} onClick={(target) => onToggleSidebarHandler(target)}> <img className='menu-image' src={toggleSidebarIcon} alt="" /> </div>
        <div className={classNames('icon-button' , "go-home-button")}> 
          <Link to={appPages.getPage('/', 'Home').path} className={classNames('item-link')}> 
            <img className='home-image' src={homeIcon} alt="" /> 
          </Link>
        </div>
      
      </div>
      <div className={classNames('header-section', 'middle-section')}>
        <div className={classNames('icon-button' , "logo")}> <img className='logo-image' src={yoavLogo} alt="" /> </div>
      </div>
      <div className={classNames('header-section', 'end-section')}>
        <div className={classNames('icon-fbutton' , "fullname-title")}> <h5 className='fullname-text'>Ilay Benjamin</h5> </div>
        <div className={classNames('icon-button' , "profile-picture")}> <img className='profile-picture-image' src={profilePicture} alt="" /> </div>
      </div>

    </header>
  );
}

export default Header;
