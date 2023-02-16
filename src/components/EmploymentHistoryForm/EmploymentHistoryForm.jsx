import Button from '../Button/Button';
import { useState } from 'react';
import Input from '../Input/Input';

import './EmploymentHistoryForm.css';

const EmploymentHistoryForm = ({
  employmentHistory,
  setEmploymentHistory,
  id,
  setModalState,
}) => {
  const index = employmentHistory.findIndex((item) => item.id === id);
  const [formState, setFormState] = useState(employmentHistory[index]);

  const onChangeHandler = (e) => {
    setFormState((previousState) => {
      return { ...previousState, [e.target.name]: [e.target.value] };
    });
  };

  const updateEmploymentHistory = () => {
    setEmploymentHistory((previousState) => {
      const newState = [...previousState];
      newState[index] = formState;

      return newState;
    });

    console.log('Before closing modal');

    if (setModalState !== undefined || setModalState !== null)
      setModalState((modalState) => {
        return { ...modalState, isOpen: false };
      });

    console.log('After closing modal');
  };

  return (
    <form>
      <div className='inputRow'>
        <Input
          labelText='Company Name'
          type='text'
          name='companyName'
          value={formState.companyName}
          onChange={(e) => onChangeHandler(e)}
        />

        <Input
          labelText='Job Title'
          type='text'
          name='jobTitle'
          value={formState.jobTitle}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='Start Date'
          type='text'
          name='startDate'
          value={formState.startDate}
          onChange={(e) => onChangeHandler(e)}
        />

        <Input
          labelText='End Date'
          type='text'
          name='endDate'
          value={formState.endDate}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <div className='saveButtonWrapper flex fullWidth justify-content-center'>
        <Button
          type='button'
          onClick={updateEmploymentHistory}
          styleClasses='btn btn-primary'
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default EmploymentHistoryForm;
