import React from 'react';
import selectors from 'src/modules/dog/list/dogListSelectors';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'src/view/shared/Spinner';

const DogListTable = () => {
  const listLoading = useSelector(selectors.selectLoading);

  const loading = listLoading;

  const rows = useSelector(selectors.selectRows);

  const hasRows = useSelector(selectors.selectHasRows);

  console.log(rows);

  return (
    <div>
      {loading && (
        <tr>
          <td colSpan={100}>
            <Spinner />
          </td>
        </tr>
      )}
      {!loading && !hasRows && (
        <tr>
          <td colSpan={100}>
            <div className="d-flex justify-content-center">
              No data
            </div>
          </td>
        </tr>
      )}
      <div className="product-card-wrapper">
        <pre> {JSON.stringify({ rows }, null, 2)}</pre>
      </div>
    </div>
  );
};

export default DogListTable;
