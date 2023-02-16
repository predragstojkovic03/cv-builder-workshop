import { useState } from 'react';
import Button from '../components/Button/Button';
import ResumeEditor from '../components/ResumeEditor/ResumeEditor';
import ResumePreview from '../components/ResumePreview/ResumePreview';
import EmploymentHistoryItem from '../components/EmploymentHistoryItem/EmploymentHistoryItem';
import Modal from '../components/Modal/Modal';

const ResumeBuilderPage = () => {
  const [previewActive, setPreviewActive] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    header: 'Heading',
    component: <p>No component</p>,
  });

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

  const [employmentHistory, setEmploymentHistory] = useState(() => {
    const saved = window.localStorage.getItem('FORM_DATA');
    const employmentHistorySaved = saved && JSON.parse(saved).employmentHistory;
    return employmentHistorySaved.map((item) => {
      return {
        ...item,
        content: function () {
          return <EmploymentHistoryItem history={this} />;
        },
      };
    });
  });

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
        setModalState={setModalState}
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
