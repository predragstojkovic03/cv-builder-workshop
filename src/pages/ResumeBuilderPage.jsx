import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import ResumeEditor from '../components/ResumeEditor/ResumeEditor';
import ResumePreview from '../components/ResumePreview/ResumePreview';
import EmploymentHistoryItem from '../components/EmploymentHistoryItem/EmploymentHistoryItem';
import Modal from '../components/Modal/Modal';
import EducationItem from '../components/EducationItem/EducationItem';
import SkillItem from '../components/SkillItem/SkillItem';

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

  const [skills, setSkills] = useState(() => {
    const saved = window.localStorage.getItem('FORM_DATA');
    const skillsSaved = saved && JSON.parse(saved).skills;

    if (!skillsSaved) return [];

    return skillsSaved.map((item) => {
      return {
        ...item,
        content: function () {
          return <SkillItem skill={this} />;
        },
      };
    });
  });

  useEffect(() => {
    window.localStorage.setItem(
      'FORM_DATA',
      JSON.stringify({
        personalDetails,
        employmentHistory,
        education,
        describeYourself,
        skills,
      })
    );
  }, [personalDetails, employmentHistory, education, describeYourself, skills]);

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
        skills={skills}
        setSkills={setSkills}
      />
      <ResumePreview
        personalDetails={personalDetails}
        previewActive={previewActive}
        employmentHistory={employmentHistory}
        education={education}
        describeYourself={describeYourself}
        skills={skills}
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
