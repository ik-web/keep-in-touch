import React from 'react';
import classNames from 'classnames';

import classes from './Contacts.module.scss';
import { CustomTitle } from 'components/UI';
import { Contact } from './Contact/Contact';

export const Contacts = ({
  dialogs,
  isSelected,
  setIsContactSelected
}) => {
  return (
    <ul className={classNames(
      classes.contacts,
      {[classes.turnOffContacts]: isSelected}
    )}>
      {!dialogs.length && 
        <div className={classes.contacts__hint}>
          <CustomTitle>
            You don't have any dialogue...
          </CustomTitle>
        </div>
      }

      {dialogs.map(dialog => (
        <Contact
          key={dialog.id}
          dialog={dialog}
          setIsContactSelected={setIsContactSelected}
        />
      ))}
    </ul>
  );
}
