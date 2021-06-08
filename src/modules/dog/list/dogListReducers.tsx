import actions from 'src/modules/dog/list/dogListAction';

const INITIAL_PAGE_SIZE = 10;

const initialData = {
  rows: [] as Array<any>,
  record: null,
  count: 0,
  loading: false,
  filter: {},
  rawFilter: {},
  pagination: {
    current: 1,
    pageSize: INITIAL_PAGE_SIZE,
  },
  sorter: {},
  selectedKeys: [] as Array<any>,
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.RESETED) {
    return {
      ...initialData,
    };
  }

  if (type === actions.RANDOM_STARTED) {
    return {
      ...initialData,
    };
  }

  if (type === actions.RANDOM_SUCCESS) {
    return {
      ...state,
      record: payload,
      loading: false,
    };
  }

  if (type === actions.RANDOM_ERROR) {
    return {
      ...state,
      record: null,
      loading: false,
    };
  }

  if (type === actions.LIST_STARTED) {
    return {
      ...state,
      loading: true,
      selectedKeys: [],
      filter: payload ? payload.filter : {},
      rawFilter: payload ? payload.rawFilter : {},
      pagination:
        payload && payload.keepPagination
          ? state.pagination
          : {
              current: 1,
              pageSize: INITIAL_PAGE_SIZE,
            },
    };
  }

  if (type === actions.LIST_SUCCESS) {
    return {
      ...state,
      loading: false,
      rows: payload.rows,
      count: payload.count,
    };
  }

  if (type === actions.LIST_ERROR) {
    return {
      ...state,
      loading: false,
      rows: [],
      count: 0,
    };
  }

  if (type === actions.SELECT_STARTED) {
    return {
      ...state,
      record: null,
      loading: true,
    };
  }

  if (type === actions.SELECT_SUCCESS) {
    return {
      ...state,
      record: payload,
      loading: false,
    };
  }

  if (type === actions.SELECT_ERROR) {
    return {
      ...state,
      record: null,
      loading: false,
    };
  }

  if (type === actions.SELECT_SUB_STARTED) {
    return {
      ...state,
      record: null,
      loading: true,
    };
  }

  if (type === actions.SELECT_SUB_SUCCESS) {
    return {
      ...state,
      record: payload,
      loading: false,
    };
  }

  if (type === actions.SELECT_SUB_ERROR) {
    return {
      ...state,
      record: null,
      loading: false,
    };
  }

  return state;
};
