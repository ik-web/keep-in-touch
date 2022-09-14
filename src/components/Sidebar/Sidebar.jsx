import React from 'react';
import styles from './Sidebar.module.css';
import SideFriends from './SideFriends/SideFriends';
import SideNav from './SideNav/SideNav';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SideNav />
      <SideFriends />
    </div>
  );
};

export default Sidebar;
