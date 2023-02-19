import Button from '../Button/Button';
import { useState } from 'react';
import Input from '../Input/Input';

import './EducationForm.css';
import TextArea from '../TextArea/TextArea';
import { useEffect } from 'react';

const EducationForm = ({ education, setEducation, id, setModalState }) => {
  const index = education.findIndex((item) => item.id === id);

  const [educationFormState, setEducationFormState] = useState(() => {
    //employmentHistory[index]

    const saved = JSON.parse(window.localStorage.getItem('MODAL_FORM_DATA'));
    const formStateSaved = saved && saved.educationFormState;
    const savedId = saved && saved.id;

    if (!formStateSaved || !savedId) {
      console.log(1);
      return education[index];
    }

    if (id.toString() === savedId.toString()) {
      console.log(2);
      return { ...formStateSaved, content: education[index].content };
    }

    console.log(3);
    return education[index];
  });

  const onChangeHandler = (e) => {
    setEducationFormState((previousState) => {
      return { ...previousState, [e.target.name]: [e.target.value] };
    });
  };

  const updateEducation = () => {
    setEducation((previousState) => {
      const newState = [...previousState];
      newState[index] = {
        ...educationFormState,
        content: previousState[index].content,
      };

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
      JSON.stringify({ educationFormState, id })
    );
  }, [educationFormState, id]);

  return (
    <form>
      <div className='inputRow'>
        <Input
          labelText='School'
          type='text'
          name='school'
          value={educationFormState.school}
          onChange={(e) => onChangeHandler(e)}
        />

        <Input
          labelText='Degree'
          type='text'
          name='degree'
          value={educationFormState.degree}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='Start Date'
          type='text'
          name='startDate'
          value={educationFormState.startDate}
          onChange={(e) => onChangeHandler(e)}
        />

        <Input
          labelText='End Date'
          type='text'
          name='endDate'
          value={educationFormState.endDate}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <div className='inputRow'>
        <TextArea
          height='110px'
          resize='none'
          labelText='Description'
          name='description'
          value={educationFormState.description}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <div className='saveButtonWrapper flex fullWidth justify-content-center'>
        <Button
          type='button'
          onClick={updateEducation}
          styleClasses='btn btn-primary'
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default EducationForm;
