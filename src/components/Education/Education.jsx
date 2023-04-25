import React from 'react';
import DragAndDropList from '../DragAndDropList/DragAndDropList';
import EducationItem from '../EducationItem/EducationItem';
import EducationForm from '../EducationForm/EducationForm';
import { v4 as uuidv4 } from 'uuid';

const Education = ({ education, setEducation, setModalState }) => {
  const addItem = (e) => {
    e.preventDefault();
    const newItem = {
      school: 'Škola/Fakultet',
      endDate: '',
      startDate: '',
      degree: '',
      description: '',
      id: uuidv4(),
      content: function () {
        return <EducationItem education={this} />;
      },
    };
    setEducation([...education, newItem]);
  };

  const removeEducationItem = (id) => {
    const updatedData = education.filter((item) => item.id !== id);

    setEducation(updatedData);
  };

  const openModalToEdit = (id) => {
    setModalState({
      isOpen: true,
      header: 'Izmenite podatke o obrazovanju',
      component: (
        <EducationForm
          education={education}
          setEducation={setEducation}
          setModalState={setModalState}
          id={id}
        />
      ),
    });
  };

  return (
    <div className='employmentHistoryWrapper'>
      <DragAndDropList
        items={education}
        setItems={setEducation}
        removeItem={removeEducationItem}
        onEdit={openModalToEdit}
      />
      <div className='flex fullWidth justify-content-center'>
        <button
          className='btn btn-primary'
          type='button'
          onClick={(e) => addItem(e)}
        >
          Dodaj
        </button>
      </div>
    </div>
  );
};

export default Education;
