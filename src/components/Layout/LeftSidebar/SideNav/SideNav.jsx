import classes from './SideNav.module.scss';
import SideNavLink from './SideNavLink/SideNavLink';

export const SideNav = () => {
  const authUserId = 1;
  const setNoContactSelected = false;

  const links = [
    {
      path: '/home',
      name: 'Home',
      id: 'home-icon'
    },
    {
      path: '/messaging',
      name: 'Messaging',
      id: 'dialogs-icon'
    },
    {
      path: '/community',
      name: 'Community',
      id: 'community-icon'
    },
    {
      path: '/network',
      name: 'Network',
      id: 'network-icon'
    },
    {
      path: `/profile/${authUserId}`,
      name: 'Profile',
      id: 'profile-icon'
    }
  ];
  
  return (
    <nav className={classes.sidenav}>
      {links.map(link => (
        <SideNavLink
          key={link.id}
          link={link}
          onSetNoContactSelected={setNoContactSelected}
        />
      ))}
    </nav>
  );
};
