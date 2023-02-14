import { useEffect } from 'react';
import DragAndDropList from '../DragAndDropList/DragAndDropList';

const EmploymentHistory = ({ employmentHistory, setEmploymentHistory }) => {
  const addItem = (e) => {
    e.preventDefault();
    const newItem = { companyName: 'Company name' };
    setEmploymentHistory([...employmentHistory, newItem]);
  };

  return (
    <div className='employmentHistoryWrapper'>
      <h2>Employment history</h2>
      <DragAndDropList
        items={employmentHistory}
        setItems={setEmploymentHistory}
      />
      <div className='flex fullWidth justify-content-center'>
        <button
          className='btn btn-primary'
          type='button'
          onClick={(e) => addItem(e)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default EmploymentHistory;
