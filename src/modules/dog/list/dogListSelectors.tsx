import { createSelector } from 'reselect';

const selectRaw = (state) => state.dog.list;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => raw.loading,
);

const selectRows = createSelector(
  [selectRaw],
  (raw) => raw.rows,
);

const selectCount = createSelector(
  [selectRaw],
  (raw) => raw.count,
);

const selectHasRows = createSelector(
  [selectCount],
  (count) => count > 0,
);

const selectOrderBy = createSelector([selectRaw], (raw) => {
  const sorter = raw.sorter;

  if (!sorter) {
    return null;
  }

  if (!sorter.field) {
    return null;
  }

  let direction =
    sorter.order === 'descend' ? 'DESC' : 'ASC';

  return `${sorter.field}_${direction}`;
});

const selectLimit = createSelector([selectRaw], (raw) => {
  const pagination = raw.pagination;
  return pagination.pageSize;
});

const selectOffset = createSelector([selectRaw], (raw) => {
  const pagination = raw.pagination;

  if (!pagination || !pagination.pageSize) {
    return 0;
  }

  const current = pagination.current || 1;

  return (current - 1) * pagination.pageSize;
});

const dogListSelectors = {
  selectLoading,
  selectOrderBy,
  selectLimit,
  selectRows,
  selectOffset,
  selectHasRows,
};

export default dogListSelectors;
