export const getPagination = (totalPages) => {
  const pagination = [];

  for (let i = 0; i < totalPages; i++) {
    pagination.push(i + 1);
  }

  return pagination;
};
