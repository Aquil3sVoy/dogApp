import { connectRouter } from 'connected-react-router';
import dog from 'src/modules/dog/dogReducers';
import { combineReducers } from 'redux';

// eslint-disable-next-line import/no-anonymous-default-export
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    dog,
  });
