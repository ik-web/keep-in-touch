import React from 'react';
import { NavLink } from 'react-router-dom';
import { GetImg } from '../../../../assets/img/GetImg';
import HeaderStyles from './Header.module.css';

const Header = () => {
  return (
    <header className={HeaderStyles.wrapper}>
      <div className={HeaderStyles.inner}>
        <NavLink to="/profile">
          <GetImg id={'header-logo'} />
        </NavLink>
        
        <h1 className={HeaderStyles.title}>
          Keep in touch
        </h1>
      </div>
    </header>
  );
};

export default Header;