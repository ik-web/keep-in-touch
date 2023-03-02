import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useUserSelector } from 'store/selectors';
import { fetchUsers, setCurrentPage } from 'store/reducers';

import classes from './Network.module.scss';
import { Loader } from 'components/UI';
import { Layout, PageBlure, Pagination } from 'components';
import { UserList } from './UserList/UserList';

export const Network = () => {
  const dispatch = useDispatch();
  const {
    usersLoading,
    currentPage,
    totalPages
  } = useUserSelector();

  const handlePaginationClick = (page) => {
    dispatch(setCurrentPage(page))
  }

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, [currentPage]);

  if (!totalPages) {
    return (
      <Layout>
        <Loader />
      </Layout>
    )
  }

  return (
    <Layout>
      <div className={classes.network}>
        {totalPages > 1 &&  
          <div className={classes.network__pagination}>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={handlePaginationClick}
              totalPages={totalPages}
              pageLoading={usersLoading}
              disabled={usersLoading}
            />
          </div>
        }

        <section className={classes.network__content}>
          {usersLoading &&
            <>
              <PageBlure />
              <Loader />
            </>
          }

          <div className={classes.network__userList}>
            <UserList />
          </div>
        </section>
      </div>
    </Layout>
  );
};
