import { useState } from 'react';
import Input from '../Input/Input';

const EmploymentHistoryForm = ({
  employmentHistory,
  setEmploymentHistory,
  id,
}) => {
  const index = employmentHistory.findIndex((item) => item.id === id);
  const [formState, setFormState] = useState(employmentHistory[index]);

  const updateEmploymentHistory = (e) => {
    setFormState((previousState) => {
      return { ...previousState, [e.target.name]: [e.target.value] };
    });

    setEmploymentHistory((previousState) => {
      const newState = [...previousState];
      const newItem = {
        ...previousState[index],
        [e.target.name]: [e.target.value].toString(),
      };
      newState[index] = newItem;

      return newState;
    });
  };

  return (
    <form>
      <div className='inputRow'>
        <Input
          labelText='Company Name'
          type='text'
          name='companyName'
          value={formState.companyName}
          onChange={(e) => updateEmploymentHistory(e)}
        />

        <Input
          labelText='Job Title'
          type='text'
          name='jobTitle'
          value={formState.jobTitle}
          onChange={(e) => updateEmploymentHistory(e)}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='Start Date'
          type='text'
          name='startDate'
          value={formState.startDate}
          onChange={(e) => updateEmploymentHistory(e)}
        />

        <Input
          labelText='End Date'
          type='text'
          name='endDate'
          value={formState.endDate}
          onChange={(e) => updateEmploymentHistory(e)}
        />
      </div>
    </form>
  );
};

export default EmploymentHistoryForm;
