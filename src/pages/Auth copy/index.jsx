import React from 'react';

import { useAuthSelector } from 'storeBeta/selectors';

import classes from './Auth.module.scss';
import { Loader } from 'components/UI';
import { AuthTitle } from './AuthTitle';
import { AuthHint } from './AuthHint';
import { AuthForm } from './AuthForm';



export const Auth = () => {
  const { loading } = useAuthSelector();

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