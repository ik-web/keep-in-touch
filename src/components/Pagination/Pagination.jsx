import React from 'react';

import classes from './Pagination.module.scss';
import { getPagination } from './utils';
import { PaginationButton } from './PaginationButton/PaginationButton';

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages = 1,
  className,
  disabled
}) => {

  if (totalPages === 1) {
    return <div></div>;
  }

  const pagination = getPagination(totalPages);

  return (
    <ul className={`${classes.pagination} ${className}`}>
      {pagination.map((page) => (
        <li key={page}>
          <PaginationButton
              totalPages={totalPages}
              page={page}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              disabled={disabled}
          />
        </li>
      ))}
    </ul>
  );
};
