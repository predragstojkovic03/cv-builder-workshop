import DragAndDropList from '../DragAndDropList/DragAndDropList';
import { v4 as uuidv4 } from 'uuid';

const EmploymentHistory = ({
  employmentHistory,
  setEmploymentHistory,
  removeEmploymentHistoryItem,
}) => {
  const addItem = (e) => {
    e.preventDefault();
    const newItem = {
      companyName: 'Company name',
      id: uuidv4(),
      contentToDisplay: { mainText: 'Company name' },
    };
    setEmploymentHistory([...employmentHistory, newItem]);
  };

  return (
    <div className='employmentHistoryWrapper'>
      <h2>Employment history</h2>
      <DragAndDropList
        items={employmentHistory}
        setItems={setEmploymentHistory}
        removeItem={removeEmploymentHistoryItem}
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
