import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import ResumeEditor from '../components/ResumeEditor/ResumeEditor';
import ResumePreview from '../components/ResumePreview/ResumePreview';
import { v4 as uuidv4 } from 'uuid';

const ResumeBuilderPage = () => {
  const [previewActive, setPreviewActive] = useState(false);

  const toggleDocumentShow = (e) => {
    e.preventDefault();
    setPreviewActive(!previewActive);
  };

  // useEffect(() => {
  //   setIsDocumentBtnToggled(true);
  // }, []);

  const [personalDetails, setPersonalDetails] = useState(() => {
    const saved = window.localStorage.getItem('FORM_DATA');
    const personalDetailsSaved = saved && JSON.parse(saved).personalDetails;
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

  const [employmentHistory, setEmploymentHistory] = useState([
    { companyName: 'Google', id: uuidv4() },
    { companyName: 'Microsoft', id: uuidv4() },
    { companyName: 'Netflix', id: uuidv4() },
    { companyName: 'Netflix', id: uuidv4() },
  ]);

  // useEffect(() => {
  //   setEmploymentHistory((employmentHistory) => {
  //     return employmentHistory.map((item) => {
  //       return { ...item, contentToDisplay: { text: item.companyName } };
  //     });
  //   });
  // }, [employmentHistory, setEmploymentHistory]);

  // console.log(personalDetails);

  return (
    <div className='flex full-width position-relative'>
      <ResumeEditor
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        employmentHistory={employmentHistory}
        setEmploymentHistory={setEmploymentHistory}
      />
      <ResumePreview
        personalDetails={personalDetails}
        previewActive={previewActive}
        employmentHistory={employmentHistory}
        setEmploymentHistory={setEmploymentHistory}
      />
      <Button
        onClick={(e) => toggleDocumentShow(e)}
        styleClasses='btn btn-primary btn-circle btn-resume-preview'
      >
        {previewActive ? 'Hide' : 'Preview'}
      </Button>
    </div>
  );
};

export default ResumeBuilderPage;
