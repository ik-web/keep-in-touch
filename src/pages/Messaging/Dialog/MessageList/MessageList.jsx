import { useDialogSelector } from 'store/selectors';

import classes from './MessageList.module.scss';
import { MessageItem } from '../MessageItem/MessageItem';

export const MessageList = () => {
  const { messagesLoading, messages } = useDialogSelector();

  return (
    <>
      {messagesLoading
        ? <div></div>
        : <ul className={classes.messageList}>
            {messages.map((message) => (
              <MessageItem key={message.id} message={message} />
            ))}
          </ul>
      }
    </>
  );
};
