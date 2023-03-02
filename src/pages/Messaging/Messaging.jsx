import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { fetchContacts, fetchDialog, setSelectedDialogId } from 'store/reducers';
import { useContactSelector, useDialogSelector } from 'store/selectors';

import classes from './Messaging.module.scss';
import { CustomTitle, Loader } from 'components/UI';
import { Layout } from 'components';
import { Contacts } from './Contacts/Contacts';
import { Dialog } from './Dialog/Dialog';

export const Messaging = () => {
  const dispatch = useDispatch();
  const { contactsLoading } = useContactSelector();
  const { dialogId } = useParams();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  useEffect(() => {
    dispatch(setSelectedDialogId(dialogId || null));

    if (dialogId) {
      dispatch(fetchDialog(dialogId));
    }
  }, [dialogId]);

  return (
    <Layout>
      {contactsLoading
        ? <Loader />
        : <MessagingContent />
      }
    </Layout>
  );
};

const MessagingContent = () => {
  const { totalContacts } = useContactSelector();
  const availableContacts = totalContacts > 0;

  return (
    <div className={classes.messaging}>
      {availableContacts
        ? <DialogsContent />
        : <CustomTitle className={classes.messaging__hint}>
            You don't have any dialogue...
          </CustomTitle>
      }
    </div>
  );
};


const DialogsContent = () => {
  const { selectedDialogId: dialogId } = useDialogSelector();

  return (
    <section className={classes.messaging__content}>
      <div className={classNames(
        classes.messaging__contacts,
        {[classes.messaging__contacts_turnOff]: dialogId}
      )}>
        <Contacts />
      </div>

      <div className={classes.messaging__divider}></div>

      <div className={classes.messaging__dialog}>
        {dialogId
          ? <Dialog />
          : <CustomTitle className={classes.messaging__dialogHint}>
              No contact selected...
            </CustomTitle>
        }
      </div>

    </section>
  );
};
