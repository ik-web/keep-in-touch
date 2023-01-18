import classes from './LeftSidebar.module.scss';
import { SideNav } from './SideNav';
import { FollowGroup } from './FollowGroup';


export const LeftSidebar = () => {
  return (
    <div className={classes.leftSidebar}>
      <SideNav />
      <FollowGroup />
    </div>
  );
};
