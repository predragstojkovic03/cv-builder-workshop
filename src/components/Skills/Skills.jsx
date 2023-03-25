import React from 'react';
import DragAndDropList from '../DragAndDropList/DragAndDropList';
import { v4 as uuidv4 } from 'uuid';
import SkillItem from '../SkillItem/SkillItem';
import SkillsForm from '../SkillsForm/SkillsForm';

const Skills = ({ skills, setSkills, setModalState }) => {
  const addItem = (e) => {
    e.preventDefault();
    const newItem = {
      name: 'Skill name',
      level: 2,
      doesWantDisplay: false,
      id: uuidv4(),
      content: function () {
        return <SkillItem skill={this} />;
      },
    };
    setSkills([...skills, newItem]);
  };

  const removeSkillItem = (id) => {
    const updatedData = skills.filter((item) => item.id !== id);

    setSkills(updatedData);
  };

  const openModalToEdit = (id) => {
    setModalState({
      isOpen: true,
      header: 'Edit education entry',
      component: (
        <SkillsForm
          skills={skills}
          setSkills={setSkills}
          id={id}
          setModalState={setModalState}
        />
      ),
    });
  };

  return (
    <div className='employmentHistoryWrapper'>
      <DragAndDropList
        items={skills}
        setItems={setSkills}
        removeItem={removeSkillItem}
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

export default Skills;
