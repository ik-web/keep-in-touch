import dialogs from '../../data/dialogs';
import { handleDataPage } from './handleDataPage';
import { updateOnlineStatus } from './handleOnlineStatus';
import { getUser } from './handleUsers';

const handleMessage = (message) => ({
  ...message,
  authorName: getUser(message.authorId).name,
  authorAvatar: getUser(message.authorId).avatar,
});

export const getDialog = (userId, dialogId, length = 20) => {
  updateOnlineStatus(userId);

  const dialog = dialogs.find((d) => d.id === +dialogId);
  
  if (dialog) {
    const messages = dialog.messages.map(message => handleMessage(message));

    return {
      statusCode: 200,
      data: handleDataPage(messages, 1, length),
    };
  }

  return { statusCode: 404 };
};

export const postNewMessage = (userId, body) => {
  updateOnlineStatus(userId);

  const { message, dialogId } = body;
  const currentDialog = dialogs.find((dialog) => dialog.id === +dialogId);

  if (currentDialog && currentDialog.membersId.includes(userId)) {
    const messages = currentDialog.messages;
    const messagesLastItem = messages[messages.length - 1];
    const newMessageId = messagesLastItem.id + 1;
    const newMessage = {
      message,
      id: newMessageId,
      authorId: userId,
    };

    messages.push(newMessage);
  
    return { statusCode: 200, data: handleMessage(newMessage) };
  }

  return { statusCode: 404 }
};
