import { useState } from 'react';
import Button from '../components/Button/Button';
import ResumeEditor from '../components/ResumeEditor/ResumeEditor';
import ResumePreview from '../components/ResumePreview/ResumePreview';
import EmploymentHistoryItem from '../components/EmploymentHistoryItem/EmploymentHistoryItem';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../components/Modal/Modal';

const ResumeBuilderPage = () => {
  const [previewActive, setPreviewActive] = useState(false);
  // eslint-disable-next-line
  const [modalOpen, setModalOpen] = useState(false);

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
    {
      id: uuidv4(),
      companyName: 'Google',
      firstName: 'Michael',
      content: function () {
        return <EmploymentHistoryItem history={this} />;
      },
    },
    {
      id: uuidv4(),
      companyName: 'Microsoft',
      firstName: 'Michael',

      content: function () {
        return <EmploymentHistoryItem history={this} />;
      },
    },
    {
      id: uuidv4(),
      companyName: 'Bing',
      firstName: 'Michael',

      content: function () {
        return <EmploymentHistoryItem history={this} />;
      },
    },
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
        setModalOpen={setModalOpen}
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

      {modalOpen && (
        <Modal setModalOpen={setModalOpen} header='Header'>
          <h1>Modal content</h1>
          <h2>Modal content</h2>
          <h2>Modal content</h2>
          <h2>Modal content</h2>
          <h2>Modal content</h2>
          <h2>Modal content</h2>
          <h2>Modal content</h2>
          <h2>Modal content</h2>
          <h2>Modal content</h2>
          <h2>Modal content</h2>
          <h2>Modal content</h2>
          <h2>Modal content</h2>
          <h2>Modal content</h2>
          <h2>Modal content</h2>
        </Modal>
      )}
    </div>
  );
};

export default ResumeBuilderPage;
