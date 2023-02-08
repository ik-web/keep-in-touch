import React from 'react';
import { Route, Routes } from 'react-router-dom';

import classes from './Dialogs.module.scss';
import { CustomTitle } from 'components/UI';
import { Dialog } from './Dialog/Dialog';

export const Dialogs = () => {
  const isContactSelected = false;
  const dialogs = [];

  return (
    <ul className={classes.dialogs}>
      {isContactSelected
      ? <Routes>
          {dialogs.map(dialog => (
            <Route
              path={`${dialog.id}`}
              key={dialog.id} 
              element={ <Dialog dialog={dialog} /> }
            />
          ))}
        </Routes>

      : <div className={classes.dialogs__hint}>
          {dialogs && (
            <CustomTitle>
              No contact selected...
            </CustomTitle>
          )}
        </div>
      }
    </ul>
  );
};
