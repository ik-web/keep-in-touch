import React from 'react';
import { Route, Routes } from 'react-router-dom';

import classes from './Dialogs.module.scss';
import { CustomTitle } from 'components/UI';
import { Dialog } from './Dialog/Dialog';

export const Dialogs = ({
  dialogs,
  isContactSelected,
}) => {
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
          {dialogs.length && (
            <CustomTitle>
              You don't have any dialogue...
            </CustomTitle>
          )}
        </div>
      }
    </ul>
  );
};
