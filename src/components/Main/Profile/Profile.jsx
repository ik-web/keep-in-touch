import React from 'react';
import styles from './Profile.module.css';
import MyPublication from './MyPublication/MyPublication';
import PublicationList from './PublicationList/PublicationList';
import UserInfo from './UserInfo/UserInfo';

const Profile = ({ users, publications }) => {
  return (
    <section className={styles.profile}>
      <UserInfo users={users} />
      
      <div className={styles.publications}>
        <MyPublication />
        <PublicationList publications={publications} />
      </div>
    </section>
  );
};

export default Profile;