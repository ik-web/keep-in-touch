import classes from './CustomIcon.module.scss';
import logout from 'assets/icoB/logout.png';
import like from 'assets/icoB/like.ico';
import home from 'assets/icoB/home.png';
import dialogs from 'assets/icoB/dialogs.ico';
import network from 'assets/icoB/network.ico';
import community from 'assets/icoB/community.png';
import profile from 'assets/icoB/profile.ico';

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
