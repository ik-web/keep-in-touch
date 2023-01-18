import React from 'react';

import { useAuthSelector } from 'storeBeta/selectors';

import classes from './Auth.module.scss';
import { AuthTitle } from './AuthTitle/AuthTitle';
import { Loader } from 'components/UI';
import { AuthHint } from './AuthHint/AuthHint';
import { AuthForm } from './AuthForm/AuthForm';

export const Auth = () => {
  const { loading } = useAuthSelector();
  console.log(loading);
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
