import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { useDialogSelector } from 'store/selectors';

import classes from './Contact.module.scss';
import { SmallAvatar } from 'components/UI';

export const Contact = ({ contact }) => {
  const { selectedDialogId } = useDialogSelector();
  const [isSelected, setIsSelected] = useState(false);
  const dialogId = contact.dialogId;

  useEffect(() => {
    if (dialogId === +selectedDialogId) {
      setIsSelected(true);
    } else if (isSelected) {
      setIsSelected(false);
    }
  }, [selectedDialogId]);

  return (
    <NavLink
      to={`/messaging/${dialogId}`}
      className={classNames(classes.contact, { [classes.contact_active]: isSelected })}
    >
      <SmallAvatar src={contact.contactAvatar} styles={classes.contact__avatar} />
      {contact.contactName}
      <div className={classes.contact__arrow}></div>
    </NavLink>
  );
};
