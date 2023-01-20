import classes from './LeftSidebar.module.scss';

import { SideNav } from './SideNav/SideNav';
import { SideFollow } from './SideFollow/SideFollow';


export const LeftSidebar = () => {
  return (
    <div className={classes.leftSidebar}>
      <SideNav />
      <SideFollow />
    </div>
  );
};
