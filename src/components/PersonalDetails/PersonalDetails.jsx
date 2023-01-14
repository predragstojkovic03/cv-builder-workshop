import React, { useEffect } from 'react';
import Input from '../Input/Input';

const PersonalDetails = ({ personalDetails, setPersonalDetails }) => {
  const updatedPersonalDetails = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.localStorage.setItem(
      'FORM_DATA',
      JSON.stringify({ personalDetails })
    );
  }, [personalDetails]);

  return (
    <div className='personalDetailsWrapper'>
      <h2>Personal Details</h2>
      <div className='inputRow'>
        <Input
          labelText='Wanted Job Title'
          type='text'
          name='wantedJobTitle'
          value={personalDetails.wantedJobTitle}
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='Profile Picture'
          type='text'
          name='imageUrl'
          value={personalDetails.imageUrl}
          onChange={updatedPersonalDetails}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='First Name'
          type='text'
          name='firstName'
          value={personalDetails.firstName}
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='Last Name'
          type='text'
          name='lastName'
          value={personalDetails.lastName}
          onChange={updatedPersonalDetails}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='Email'
          type='text'
          name='email'
          value={personalDetails.email}
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='Phone'
          type='text'
          name='phone'
          value={personalDetails.phone}
          onChange={updatedPersonalDetails}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='Country'
          type='text'
          name='country'
          value={personalDetails.country}
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='City'
          type='text'
          name='city'
          value={personalDetails.city}
          onChange={updatedPersonalDetails}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='Address'
          type='text'
          name='address'
          value={personalDetails.address}
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='Date of Birth'
          type='text'
          name='dateOfBirth'
          value={personalDetails.dateOfBirth}
          onChange={updatedPersonalDetails}
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
