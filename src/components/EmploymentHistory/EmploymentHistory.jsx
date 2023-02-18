import DragAndDropList from '../DragAndDropList/DragAndDropList';
import { v4 as uuidv4 } from 'uuid';
import EmploymentHistoryItem from '../EmploymentHistoryItem/EmploymentHistoryItem';
import EmploymentHistoryForm from '../EmploymentHistoryForm/EmploymentHistoryForm';
import { useEffect } from 'react';

const EmploymentHistory = ({
  employmentHistory,
  setEmploymentHistory,
  removeEmploymentHistoryItem,
  setModalState,
}) => {
  const addItem = (e) => {
    e.preventDefault();
    const newItem = {
      companyName: 'Company name',
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
      header: 'Edit employment history entry',
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

  useEffect(() => {
    window.localStorage.setItem(
      'FORM_DATA',
      JSON.stringify({ employmentHistory })
    );
  }, [employmentHistory]);

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
