import React from 'react';
import DogRandomFilter from './DogRandomFilter';
import DogRandomTable from './DogRandomTable';

const DogRandomPage = (props) => {
  return (
    <div>
      <div>
        <DogRandomFilter />
      </div>
      <DogRandomTable />
    </div>
  );
};

export default DogRandomPage;
