import { useState } from 'react';
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
  const [personalDetails, setPersonalDetails] = useState({
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
  });

  console.log(personalDetails);

  return (
    <div className='flex full-width position-relative'>
      <ResumeEditor
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <ResumePreview
        firstName={personalDetails.firstName}
        lastName={personalDetails.lastName}
      />
    </div>
  );
};

export default ResumeBuilderPage;
