import classes from './Dialog.module.scss';
import { MessageForm } from './MessageForm/MessageForm';
import { MessageList } from './MessageList/MessageList';

export const Dialog = () => {
  return (
    <div className={classes.dialog}>
      <div className={classes.dialog__inner}>
        <MessageList />
        <MessageForm />   
      </div>
    </div>
  );
};
