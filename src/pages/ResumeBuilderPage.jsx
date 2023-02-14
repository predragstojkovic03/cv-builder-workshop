import { useState } from 'react';
import Button from '../components/Button/Button';
import ResumeEditor from '../components/ResumeEditor/ResumeEditor';
import ResumePreview from '../components/ResumePreview/ResumePreview';

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
    { companyName: 'Google', id: 1 },
    { companyName: 'Microsoft', id: 2 },
    { companyName: 'Netflix', id: 3 },
  ]);

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
