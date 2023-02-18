import Button from '../Button/Button';
import { useState } from 'react';
import Input from '../Input/Input';

import './EmploymentHistoryForm.css';
import TextArea from '../TextArea/TextArea';
import { useEffect } from 'react';

const EmploymentHistoryForm = ({
  employmentHistory,
  setEmploymentHistory,
  id,
  setModalState,
}) => {
  const index = employmentHistory.findIndex((item) => item.id === id);
  const [employmentHistoryFormState, setEmploymentHistoryFormState] = useState(
    () => {
      //employmentHistory[index]

      const saved = JSON.parse(window.localStorage.getItem('MODAL_FORM_DATA'));
      const formStateSaved = saved && saved.employmentHistoryFormState;
      const savedId = saved && saved.id;

      if (!formStateSaved || !savedId) return employmentHistory[index];

      if (id.toString() === savedId.toString())
        return { ...formStateSaved, content: employmentHistory[index].content };

      return employmentHistory[index];
    }
  );

  const onChangeHandler = (e) => {
    setEmploymentHistoryFormState((previousState) => {
      return { ...previousState, [e.target.name]: [e.target.value] };
    });
  };

  const updateEmploymentHistory = () => {
    setEmploymentHistory((previousState) => {
      const newState = [...previousState];
      newState[index] = employmentHistoryFormState;

      window.localStorage.removeItem('MODAL_FORM_DATA');

      return newState;
    });

    if (setModalState !== undefined || setModalState !== null)
      setModalState((modalState) => {
        return { ...modalState, isOpen: false };
      });
  };

  useEffect(() => {
    window.localStorage.setItem(
      'MODAL_FORM_DATA',
      JSON.stringify({ employmentHistoryFormState, id })
    );
  }, [employmentHistoryFormState, id]);

  return (
    <form>
      <div className='inputRow'>
        <Input
          labelText='Company Name'
          type='text'
          name='companyName'
          value={employmentHistoryFormState.companyName}
          onChange={(e) => onChangeHandler(e)}
        />

        <Input
          labelText='Job Title'
          type='text'
          name='jobTitle'
          value={employmentHistoryFormState.jobTitle}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='Start Date'
          type='text'
          name='startDate'
          value={employmentHistoryFormState.startDate}
          onChange={(e) => onChangeHandler(e)}
        />

        <Input
          labelText='End Date'
          type='text'
          name='endDate'
          value={employmentHistoryFormState.endDate}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <div className='inputRow'>
        <TextArea
          height='110px'
          resize='none'
          name='description'
          value={employmentHistoryFormState.description}
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
