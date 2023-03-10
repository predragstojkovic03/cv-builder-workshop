import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import ResumeEditor from '../components/ResumeEditor/ResumeEditor';
import ResumePreview from '../components/ResumePreview/ResumePreview';
import EmploymentHistoryItem from '../components/EmploymentHistoryItem/EmploymentHistoryItem';
import Modal from '../components/Modal/Modal';
import EducationItem from '../components/EducationItem/EducationItem';

const ResumeBuilderPage = () => {
  const [previewActive, setPreviewActive] = useState(false);

  const toggleDocumentShow = (e) => {
    e.preventDefault();
    setPreviewActive(!previewActive);
  };

  const [modalState, setModalState] = useState({
    isOpen: false,
    header: 'Heading',
    component: <p>No component</p>,
  });

  const [personalDetails, setPersonalDetails] = useState(() => {
    const saved = window.localStorage.getItem('FORM_DATA');
    const personalDetailsSaved = saved && JSON.parse(saved).personalDetails;

    if (personalDetailsSaved) return personalDetailsSaved;

    return {
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
    };
  });

  const [employmentHistory, setEmploymentHistory] = useState(() => {
    const saved = window.localStorage.getItem('FORM_DATA');
    const employmentHistorySaved = saved && JSON.parse(saved).employmentHistory;

    if (!employmentHistorySaved) return [];

    return employmentHistorySaved.map((item) => {
      return {
        ...item,
        content: function () {
          return <EmploymentHistoryItem history={this} />;
        },
      };
    });
  });

  const [education, setEducation] = useState(() => {
    const saved = window.localStorage.getItem('FORM_DATA');
    const educationSaved = saved && JSON.parse(saved).education;

    if (!educationSaved) return [];

    return educationSaved.map((item) => {
      return {
        ...item,
        content: function () {
          return <EducationItem education={this} />;
        },
      };
    });
  });

  const [describeYourself, setDescribeYourself] = useState(() => {
    const saved = window.localStorage.getItem('FORM_DATA');
    const describeYourselfSaved = saved && JSON.parse(saved).describeYourself;

    if (!describeYourselfSaved) return '';

    return describeYourselfSaved;
  });
  useEffect(() => {
    window.localStorage.setItem(
      'FORM_DATA',
      JSON.stringify({
        personalDetails,
        employmentHistory,
        education,
        describeYourself,
      })
    );
  }, [personalDetails, employmentHistory, education, describeYourself]);

  return (
    <div className='flex full-width position-relative'>
      <ResumeEditor
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        employmentHistory={employmentHistory}
        setEmploymentHistory={setEmploymentHistory}
        education={education}
        setEducation={setEducation}
        setModalState={setModalState}
        describeYourself={describeYourself}
        setDescribeYourself={setDescribeYourself}
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

      {modalState.isOpen && (
        <Modal setModalState={setModalState} header={modalState.header}>
          {modalState.component}
        </Modal>
      )}
    </div>
  );
};

export default ResumeBuilderPage;
