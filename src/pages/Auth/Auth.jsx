import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthSelector } from 'store/selectors';

import classes from './Auth.module.scss';
import { Loader } from 'components/UI';
import { AuthTitle } from './AuthTitle/AuthTitle';
import { AuthHint } from './AuthHint/AuthHint';
import { AuthForm } from './AuthForm/AuthForm';

export const Auth = () => {
  const { user, loading } = useAuthSelector();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.hasOwnProperty("id")) {
      navigate("/home")
    }
  }, [user]) 

  return (
    <div className={classes.auth}>
      <div className={classes.auth__topBlock}>
        <AuthTitle />

        <p className={classes.auth__description}>
          The social network simulator
        </p>
      </div>

      <div className={classes.auth__bottomBlock}>
        {loading
        ? <Loader />
        : <>
            <AuthHint />
            <AuthForm />
          </>
        }
      </div>
    </div>
  );
};
