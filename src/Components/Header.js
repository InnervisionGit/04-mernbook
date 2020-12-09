import React from 'react';
import logo from '../img/mern-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <img src={logo} alt='mern logo' />
      </div>
      <div className='header-input'>
        <SearchIcon />
        <input placeholder='Search stuff' type='text' />
      </div>
      <div className='header-center'>
        <div className='header-option header-option-active'>
          <HomeIcon fontsize='large' />
        </div>
        <div className='header-option'>
          <FlagIcon fontsize='large' />
        </div>
        <div className='header-option'>
          <SubscriptionsOutlinedIcon fontsize='large' />
        </div>
        <div className='header-option'>
          <StorefrontOutlinedIcon fontsize='large' />
        </div>
        <div className='header-option'>
          <SupervisedUserCircleIcon fontsize='large' />
        </div>
      </div>
      <div className='header-right'>
        <div className='header-info'>
          <Avatar />
          <h4>Innervision</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
