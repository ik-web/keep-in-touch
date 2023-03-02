import { NavLink } from 'react-router-dom';

import classes from './Header.module.scss';
import { AppImg } from 'components/UI';
import { HeaderMenu } from './HeaderMenu/HeaderMenu';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className="pageContainer">
        <div className={classes.header__inner}>
          <NavLink to="/">
            <AppImg id={'header-logo'} />
          </NavLink>

          <h1 className={classes.header__title}>Keep in touch</h1>

          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};
