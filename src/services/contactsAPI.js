import { server } from 'mockBackend/server';
import { getUserKey } from './utils';

export const contactsAPI = {
  fetchContacts() {
    return server.get(`contacts`, getUserKey());
  },
};
