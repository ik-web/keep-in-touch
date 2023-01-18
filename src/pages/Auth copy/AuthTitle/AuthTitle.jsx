import React from 'react';

import classes from './AuthTitle.module.scss';

export const AuthTitle = () => {
    return (
        <h1 className={classes.authTitle}>
          <span>Welcome</span>
          <span>to</span>
          <span className={classes.authTitle__decorate}>Keep in touch</span>
        </h1>
    );
};
