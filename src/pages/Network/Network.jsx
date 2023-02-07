import React from 'react';
import classNames from 'classnames';

import classes from './Network.module.scss';
import { CustomTitle, Loader } from 'components/UI';
import { Layout } from 'components';
import { User } from './User/User';

import PaginationButtons from 'shared/PaginationButtons/PaginationButtons';
// import Pagination from "../../components/Pagination/Pagination";

export const Network = () => {
  const users = [];
  const pageIsLoaded = false;
  const usersPageIsLoading = false;
  const currentPage = 1;
  const fetchUsers = null;
  const pages = 1;

  return (
    <Layout>
      <div className={classes.network}>
        {pageIsLoaded ? (
          <section className={classes.network__inner}>
            {/* <Pagination /> */}
            <PaginationButtons
              isDisabled={usersPageIsLoading}
              styles={classes.network__pages}
              pages={pages}
              currentPage={currentPage}
              onEvent={fetchUsers}
            />

            <div className={classes.network__usersContainer}>
              <ul
                className={classNames(classes.network__users, {
                  [classes.network__users_loading]: usersPageIsLoading,
                })}
              >
                {users.map((user) => (
                  <User user={user} key={user.id} />
                ))}
              </ul>

              {usersPageIsLoading && (
                <div className={classes.network__usersBlure}>
                  <Loader />
                </div>
              )}
            </div>
          </section>
        ) : (
          // <Loader />
          <CustomTitle>
            The page is currently being refactored
          </CustomTitle>
        )}
      </div>
    </Layout>
  );
};
