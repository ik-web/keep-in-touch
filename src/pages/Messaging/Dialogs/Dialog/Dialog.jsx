import React from 'react';

import classes from './Dialog.module.scss';
import { Message } from './Message/Message';
import { MessageForm } from './MessageForm/MessageForm';

export const Dialog = ({
  authUser,
  dialog
}) => {
  return (
    <li className={classes.dialog}>
      <ul className={classes.dialog__messages}>
        {dialog.messages.map(message => (
          <Message 
            authUser={authUser}
            message={message}
            key={message.id}
          />
        )).reverse()}
      </ul>

      <MessageForm dialogId={dialog.id} />   
  </li>
  );
};
