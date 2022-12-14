import React from 'react';
import { NavLink } from 'react-router-dom';
import GetIcon from '../../../assets/ico/GetIcon';
import styles from './LogoutButton.module.scss';

const LogoutButton = ({ onLogoutUser }) => {
  return (
      <NavLink to='/'>
        <button
          className={styles.logoutBtn}
          onClick={onLogoutUser}
        >
          Logout
          <GetIcon id='logout-icon' />
        </button>
      </NavLink>
    );
};

export default LogoutButton;
