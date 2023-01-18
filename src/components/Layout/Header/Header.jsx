import { NavLink } from 'react-router-dom';

import classes from './Header.module.scss';
import { AppImage } from 'components/UI';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__inner}>
        <NavLink to="/">
          <AppImage id={'header-logo'} />
        </NavLink>
        
        <h1 className={classes.header__title}>
          Keep in touch
        </h1>
      </div>
    </header>
  );
};
