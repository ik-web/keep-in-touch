import classes from './Content.module.scss';
import { LeftSidebar } from '../LeftSidebar/LeftSidebar';
import { RightSidebar } from '../RightSidebar/RightSidebar';

export const Content = ({ children }) => {
  return (
    <div className={classes.content}>
      <div className="pageContainer">
        <div className={classes.content__inner}>
          <div className={classes.content__leftSidebar}>
            <LeftSidebar />
          </div>

          <main className={classes.content__main}>
            {children}
          </main>

          <div className={classes.content__rightSidebar}>
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
