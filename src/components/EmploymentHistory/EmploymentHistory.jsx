import DragAndDropList from '../DragAndDropList/DragAndDropList';
import { v4 as uuidv4 } from 'uuid';
import EmploymentHistoryItem from '../EmploymentHistoryItem/EmploymentHistoryItem';
import EmploymentHistoryForm from '../EmploymentHistoryForm/EmploymentHistoryForm';

const EmploymentHistory = ({
  employmentHistory,
  setEmploymentHistory,
  removeEmploymentHistoryItem,
  setModalState,
}) => {
  const addItem = (e) => {
    e.preventDefault();
    const newItem = {
      companyName: 'Naziv kompanije',
      endDate: '',
      startDate: '',
      jobTitle: '',
      description: '',
      id: uuidv4(),
      content: function () {
        return <EmploymentHistoryItem history={this} />;
      },
    };
    setEmploymentHistory([...employmentHistory, newItem]);
  };

  const openModalToEdit = (id) => {
    setModalState({
      isOpen: true,
      header: 'Izmenite podatke o zaposlenju',
      component: (
        <EmploymentHistoryForm
          employmentHistory={employmentHistory}
          setEmploymentHistory={setEmploymentHistory}
          setModalState={setModalState}
          id={id}
        />
      ),
    });
  };

  return (
    <div className='employmentHistoryWrapper'>
      <DragAndDropList
        items={employmentHistory}
        setItems={setEmploymentHistory}
        removeItem={removeEmploymentHistoryItem}
        onEdit={openModalToEdit}
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
