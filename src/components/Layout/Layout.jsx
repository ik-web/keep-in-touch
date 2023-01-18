import classes from './Layout.module.scss';
import { Header } from './Header';
import { LeftSidebar } from './LeftSidebar';
import { RightSidebar } from './RightSidebar';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <main className={classes.layout__main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
