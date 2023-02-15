import DragAndDropList from '../DragAndDropList/DragAndDropList';
import { v4 as uuidv4 } from 'uuid';
import EmploymentHistoryItem from '../EmploymentHistoryItem/EmploymentHistoryItem';

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
      content: function () {
        return <EmploymentHistoryItem history={this} />;
      },
    };
    setEmploymentHistory([...employmentHistory, newItem]);
  };

  return (
    <div className='employmentHistoryWrapper'>
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
