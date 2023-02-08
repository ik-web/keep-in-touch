import React from 'react';
import classNames from 'classnames';

import { useContactSelector } from 'store/selectors';

import classes from './Contacts.module.scss';
import { Contact } from './Contact/Contact';

export const Contacts = () => {
  const { contacts } = useContactSelector();

  const isSelected = null;

  return (
    <ul className={classNames(
      classes.contacts,
      {[classes.turnOffContacts]: isSelected}
    )}>
      {contacts.map(contact => (
        <Contact
          key={contact.dialogId}
          contact={contact}
        />
      ))}
    </ul>
  );
}
