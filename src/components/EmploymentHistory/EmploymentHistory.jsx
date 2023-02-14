import React from 'react';
import DragAndDropList from '../DragAndDropList/DragAndDropList';

const EmploymentHistory = ({ employmentHistory, setEmploymentHistory }) => {
  return (
    <div className='employmentHistoryWrapper'>
      <h2>Employment history</h2>
      <DragAndDropList
        employmentHistory={employmentHistory}
        setEmploymentHistory={setEmploymentHistory}
      />
    </div>
  );
};

export default EmploymentHistory;
