import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { postNewMessage } from "store/reducers";
import { useDialogSelector } from "store/selectors";

import classes from "./MessageForm.module.scss";

export const MessageForm = () => {
  const dispatch = useDispatch();
  const { selectedDialogId } = useDialogSelector();
  const [ message, setMessage ] = useState('');
  const input = useRef();

  if (input.current) {
    input.current.focus();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (message.trim()) {
      const newMessageInfo = {
        message,
        dialogId: selectedDialogId,
      };

      dispatch(postNewMessage(newMessageInfo));
      setMessage('');
    }
  }

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  useEffect(() => {
    setMessage('')
  }, [selectedDialogId]);

  return (
    <form className={classes.messageForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name='message'
        className={classes.messageForm__input}
        onChange={handleChange}
        placeholder="New message..."
        value={message}
        ref={input}
      />

      <button
        className={classes.messageForm__button}
        type='submit'
      >
        Send
      </button>
    </form>
  );
};
