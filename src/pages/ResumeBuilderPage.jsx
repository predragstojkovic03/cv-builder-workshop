import { useState } from 'react';
import Button from '../components/Button/Button';
import ResumeEditor from '../components/ResumeEditor/ResumeEditor';
import ResumePreview from '../components/ResumePreview/ResumePreview';

const ResumeBuilderPage = () => {
  // const [wantedJobTitle, setWantedJobTitle] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [country, setCountry] = useState('');
  // const [city, setCity] = useState('');
  // const [dateOfBirth, setDateOfBirth] = useState('');
  // const [address, setAddress] = useState('');
  // const [imageUrl, setImageUrl] = useState('');
  const [personalDetails, setPersonalDetails] = useState(() => {
    const saved = window.localStorage.getItem('FORM_DATA');
    const personalDetailsSaved = JSON.parse(saved).personalDetails;
    return (
      personalDetailsSaved || {
        wantedJobTitle: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        dateOfBirth: '',
        address: '',
        imageUrl: '',
      }
    );
  });

  // console.log(personalDetails);

  return (
    <div className='flex full-width position-relative'>
      <ResumeEditor
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <ResumePreview personalDetails={personalDetails} />
    </div>
  );
};

export default ResumeBuilderPage;
