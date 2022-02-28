import './topnav.scss'
import { Switch, AppBar, Toolbar } from '@mui/material';
import Logo from '../../assets/images/logo.jpg'
import UserInfo from '../user-info/UserInfo';
import { useState } from 'react';

const TopNav = () => {
   return (
      <div className="topnav">
         <UserInfo />
      </div>
   )
}

export default TopNav