import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import classes from './Messaging.module.scss';
import { CustomTitle, Loader } from 'components/UI';
import { Layout } from 'components';
import { Contacts } from './Contacts/Contacts';
import { Dialogs } from './Dialogs/Dialogs';

export const Messaging = () => {
  const dispatch = useDispatch();
  const totalDialogs = 0;
  const loading = false;

  useEffect(() => {
    // dispatch(fetchDialogs());
  }, []);

  return (
    <Layout>
      {loading
        ? <Loader />
        : <div className={classes.messaging}>
            {totalDialogs > 0
              ? <section className={classes.messaging__content}>
                  <Contacts />
                  <Dialogs />        
                </section>

              : <CustomTitle className={classes.messaging__withNoData}>
                  You don't have any dialogue...
                </CustomTitle>
            }
          </div>
      }
    </Layout>
  );
};
