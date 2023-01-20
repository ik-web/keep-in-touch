import classes from './SideNav.module.scss';
import { SideNavLink } from './SideNavLink/SideNavLink';

export const SideNav = () => {
  const userId = 1;
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
      path: '/network',
      name: 'Network',
      id: 'network-icon'
    },
    {
      path: '/community',
      name: 'Community',
      id: 'community-icon'
    },
    {
      path: `/profile/${userId}`,
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
