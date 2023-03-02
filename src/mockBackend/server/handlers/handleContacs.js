import userData from '../../data/userData';
import dialogData from '../../data/dialogData';
import { handleDataPage } from './handleDataPage';
import { updateOnlineStatus } from './handleOnlineStatus';

export const getUserDialogs = (userId) => {
  return dialogData.filter((dialog) => dialog.membersId.includes(userId));
};

const getContact = (userId, dialog) => {
  return userData.find((user) => user.id === dialog.membersId.find((id) => id !== userId));
};

export const getContacs = (userId, length = 20) => {
  updateOnlineStatus(userId);

  const userDialogs = getUserDialogs(userId);

  if (userDialogs) {
    const userContacts = userDialogs.map((dialog) => ({
      dialogId: dialog.id,
      contactName: getContact(userId, dialog).name,
      contactAvatar: getContact(userId, dialog).avatar,
    }));

    return {
      data: handleDataPage(userContacts, 1, length),
      statusCode: 200,
    };
  }

  return { statusCode: 404 };
};
