import React from 'react';
import SiteManagement from './SiteManagement.js';
import Search from './Search.js';
import Logo from './images/Logo.png';

function Header() {
  return (
    <div className="header">
        <img className="header_img" src={Logo} width="10%" height="auto" alt='logo' />
        <SiteManagement />
        <div className="header__size1">От элитных вилл до уютных аппартаментов</div>
        <div className="header__size2">Бронируйте люксовые виллы от локальных компаний</div>
        <Search />
    </div>
  );
}

export default Header;