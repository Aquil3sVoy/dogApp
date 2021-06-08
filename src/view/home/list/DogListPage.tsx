import React from 'react';
import DogListFilter from './DogListFilter';
import DogListTable from './DogListTable';

const DogListPage = (props) => {
  return (
    <div>
      <div>
        <DogListFilter />
      </div>
      <DogListTable />
    </div>
  );
};

export default DogListPage;
