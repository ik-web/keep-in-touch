import users from '../../data/users';
import dialogs from '../../data/dialogs';
import { handleDataPage } from './handleDataPage';
import { updateOnlineStatus } from './handleOnlineStatus';

export const getUserDialogs = (userId) => {
  return dialogs.filter((dialog) => dialog.membersId.includes(userId));
};

const getContact = (userId, dialog) => {
  return users.find((user) => user.id === dialog.membersId.find((id) => id !== userId));
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
