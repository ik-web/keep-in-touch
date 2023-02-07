import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthSelector } from 'store/selectors';

import classes from './Layout.module.scss';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Content } from './Content/Content';

export const Layout = ({ children }) => {
  const { user } = useAuthSelector();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.hasOwnProperty('id')) {
      navigate('/auth');
    }
  });

  return (
    <div className={classes.layout}>
      <Header />
      <Content children={children} />
      <Footer />
    </div>
  );
};
