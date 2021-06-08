import actions from 'src/modules/dog/list/dogListAction';

export default (store) => {
  store.dispatch(actions.doInit());
};
