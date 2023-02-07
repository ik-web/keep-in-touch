import classes from './LeftSidebar.module.scss';

import { SideNav } from './SideNav/SideNav';
import { SideFollow } from './SideFollow/SideFollow';


export const LeftSidebar = () => {
  return (
    <aside className={classes.leftSidebar}>
      <SideNav />
      <SideFollow />
    </aside>
  );
};
