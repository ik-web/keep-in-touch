import React from 'react';
import styles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = ({ name, id, avatar }) => {
  const path = `/messages/${id}`;

  return (
    <li className={styles.dialog}>
      <NavLink to={path}>
        <img src={avatar} alt='User avatar' className={styles.dialogAva}/>
        {name}
      </NavLink>
    </li>
  );
}

export default Dialog;