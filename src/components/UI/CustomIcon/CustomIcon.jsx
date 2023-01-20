import classes from './CustomIcon.module.scss';
import logout from 'assets/ico/logout.png';
import like from 'assets/ico/like.ico';
import home from 'assets/ico/home.png';
import dialogs from 'assets/ico/dialogs.ico';
import network from 'assets/ico/network.ico';
import community from 'assets/ico/community.png';
import profile from 'assets/ico/profile.ico';

export const CustomIcon = ({ id }) => {
  switch (id) {
    case 'logout-icon':
      return (
        <img
          src={logout}
          alt='Logout icon'
          className={classes.logoutIcon}
        />
      );

    case 'like-icon':
      return (
        <img
          src={like}
          alt='Like icon'
          className={classes.likeIcon}
        />
      );
    
    case 'profile-icon':
      return (
        <img
          src={profile}
          alt='Profile icon'
          className={classes.sideNavIcon}
        />
      );

    case 'dialogs-icon':
      return (
        <img
          src={dialogs}
          alt='Dialogs icon'
          className={classes.sideNavIcon}
        />
      );
     
    case 'home-icon':
      return (
        <img
          src={home}
          alt='Home icon'
          className={classes.sideNavIcon}
        />
      );

    case 'network-icon':
      return (
        <img
          src={network}
          alt='Network icon'
          className={classes.sideNavIcon}
        />
      );

    case 'community-icon':
      return (
        <img
          src={community}
          alt='Community icon'
          className={classes.sideNavIcon}
        />
      );
         
    default:
      return null;
  };
};
