import React from 'react';
import Input from '../Input/Input';

const PersonalDetails = ({ personalDetails, setPersonalDetails }) => {
  const updatedPersonalDetails = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className='personalDetailsWrapper'>
      <div className='inputRow'>
        <Input
          labelText='Željeno radno mesto'
          type='text'
          name='wantedJobTitle'
          value={personalDetails.wantedJobTitle}
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='Profilna slika'
          type='text'
          name='imageUrl'
          value={personalDetails.imageUrl}
          onChange={updatedPersonalDetails}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='Ime'
          type='text'
          name='firstName'
          value={personalDetails.firstName}
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='Prezime'
          type='text'
          name='lastName'
          value={personalDetails.lastName}
          onChange={updatedPersonalDetails}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='Mejl'
          type='text'
          name='email'
          value={personalDetails.email}
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='Telefon'
          type='text'
          name='phone'
          value={personalDetails.phone}
          onChange={updatedPersonalDetails}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='Država'
          type='text'
          name='country'
          value={personalDetails.country}
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='Grad'
          type='text'
          name='city'
          value={personalDetails.city}
          onChange={updatedPersonalDetails}
        />
      </div>
      <div className='inputRow'>
        <Input
          labelText='Adresa'
          type='text'
          name='address'
          value={personalDetails.address}
          onChange={updatedPersonalDetails}
        />

        <Input
          labelText='Datum rođenja'
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
