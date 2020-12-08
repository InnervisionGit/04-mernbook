import React from 'react';
import logo from '../img/mern-logo.png';
import SearchIcon from '@material-ui/icons/Search';

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
    </div>
  );
};

export default Header;
