import Button from '../Button/Button';
import { useState } from 'react';
import Input from '../Input/Input';

import './SkillsForm.css';
import { useEffect } from 'react';
import { Slider, Switch } from '@mui/material';

const SkillsForm = ({ skills, setSkills, id, setModalState }) => {
  const index = skills.findIndex((item) => item.id === id);

  const [skillsFormState, setSkillsFormState] = useState(() => {
    const saved = JSON.parse(window.localStorage.getItem('MODAL_FORM_DATA'));
    const formStateSaved = saved && saved.skillsFormState;
    const savedId = saved && saved.id;

    if (!formStateSaved || !savedId) {
      console.log(1);
      return skills[index];
    }

    if (id.toString() === savedId.toString()) {
      console.log(2);
      return { ...formStateSaved, content: skills[index].content };
    }

    console.log(3);
    return skills[index];
  });

  const onChangeHandler = (e) => {
    if (e.target.name === 'doesWantDisplay') {
      setSkillsFormState((previousState) => {
        return { ...previousState, [e.target.name]: e.target.checked };
      });
    } else {
      setSkillsFormState((previousState) => {
        return { ...previousState, [e.target.name]: e.target.value };
      });
    }
  };

  const updateSkills = () => {
    setSkills((previousState) => {
      const newState = [...previousState];
      newState[index] = {
        ...skillsFormState,
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
      JSON.stringify({ skillsFormState, id })
    );
  }, [skillsFormState, id]);

  const marks = [
    {
      value: 1,
      label: 'beginner',
    },
    {
      value: 2,
      label: 'intermediate',
    },
    {
      value: 3,
      label: 'expert',
    },
  ];

  function valuetext(value) {
    return `${value} level`;
  }

  return (
    <form>
      <div className='inputRow'>
        <Input
          labelText='Skill name'
          type='text'
          name='name'
          value={skillsFormState.name}
          onChange={(e) => onChangeHandler(e)}
        />
        <div>
          <label style={{ fontSize: '14px' }}>Show level</label>
          <Switch
            checked={skillsFormState.doesWantDisplay}
            onChange={(e) => onChangeHandler(e)}
            name='doesWantDisplay'
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
      </div>
      <div className='inputRow'>
        <Slider
          aria-label='Level'
          name='level'
          defaultValue={2}
          getAriaValueText={valuetext}
          disabled={!skillsFormState.doesWantDisplay}
          step={null}
          min={1}
          max={3}
          value={Number(skillsFormState.level)}
          onChange={(e) => onChangeHandler(e)}
          valueLabelDisplay='auto'
          marks={marks}
        />
      </div>
      <div className='saveButtonWrapper flex fullWidth justify-content-center'>
        <Button
          type='button'
          onClick={updateSkills}
          styleClasses='btn btn-primary'
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default SkillsForm;
