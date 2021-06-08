import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from 'src/modules/dog/list/dogListAction';

function DogListFilter(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.doFetchDogs());
  }, [dispatch]);

  return null;
}

export default DogListFilter;
