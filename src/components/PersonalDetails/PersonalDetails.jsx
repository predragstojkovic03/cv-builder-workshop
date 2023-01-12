import React from 'react';
import Input from '../Input/Input';

const PersonalDetails = ({ personalDetails, setPersonalDetails }) => {
  const updatedPersonalDetails = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className='personalDetailsWrapper'>
      <h2>Personal Details</h2>
      <div className='inputRow'>
        <Input
          labelText='Wanted Job Title'
          type='text'
          name='wantedJobTitle'
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='Profile Picture'
          type='text'
          name='imageUrl'
          onChange={updatedPersonalDetails}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='First Name'
          type='text'
          name='firstName'
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='Last Name'
          type='text'
          name='lastName'
          onChange={updatedPersonalDetails}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='Email'
          type='text'
          name='email'
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='Phone'
          type='text'
          name='phone'
          onChange={updatedPersonalDetails}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='Country'
          type='text'
          name='country'
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='City'
          type='text'
          name='city'
          onChange={updatedPersonalDetails}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='Address'
          type='text'
          name='address'
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='Date of Birth'
          type='text'
          name='dateOfBirth'
          onChange={updatedPersonalDetails}
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
