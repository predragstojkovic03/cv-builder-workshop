import { useState } from 'react';
import Button from '../components/Button/Button';
import ResumeEditor from '../components/ResumeEditor/ResumeEditor';
import ResumePreview from '../components/ResumePreview/ResumePreview';

const ResumeBuilderPage = () => {
  const [previewActive, setPreviewActive] = useState(false);

  const toggleDocumentShow = (e) => {
    e.preventDefault();

    setResumeResponsiveShowing(!resumeResponsiveShowing);
    setPreviewActive(!previewActive);
  };

  // useEffect(() => {
  //   setIsDocumentBtnToggled(true);
  // }, []);

  const [resumeResponsiveShowing, setResumeResponsiveShowing] = useState(false);

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

  // console.log(personalDetails);

  return (
    <div className='flex full-width position-relative'>
      <ResumeEditor
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <ResumePreview
        personalDetails={personalDetails}
        resumeResponsiveShowing={resumeResponsiveShowing}
        previewActive={previewActive}
      />
      <Button
        onClick={(e) => toggleDocumentShow(e)}
        styleClasses='btn btn-primary btn-circle btn-resume-preview'
      >
        {resumeResponsiveShowing ? 'Hide' : 'Preview'}
      </Button>
    </div>
  );
};

export default ResumeBuilderPage;
