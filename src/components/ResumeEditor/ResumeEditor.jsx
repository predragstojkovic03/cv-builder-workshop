import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import EditorSection from '../EditorSection/EditorSection';
import EmploymentHistory from '../EmploymentHistory/EmploymentHistory';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import './ResumeEditor.css';

const ResumeEditor = ({
  personalDetails,
  setPersonalDetails,
  employmentHistory,
  setEmploymentHistory,
}) => {
  const navigate = useNavigate();

  const removeEmploymentHistoryItem = (id) => {
    const updatedData = employmentHistory.filter(
      (history) => history.id !== id
    );

    setEmploymentHistory(updatedData);
  };

  return (
    <div className={`resumeEditorWrapper`}>
      <div className='resumeEditorHeading'>
        Create your Resume{' '}
        <Button styleClasses='btn btn-primary' onClick={() => navigate('/')}>
          Back to homepage
        </Button>
      </div>{' '}
      <form>
        <EditorSection heading='Personal Details'>
          <PersonalDetails
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
          />
        </EditorSection>
        <EditorSection heading='Employment History'>
          <EmploymentHistory
            removeEmploymentHistoryItem={removeEmploymentHistoryItem}
            employmentHistory={employmentHistory}
            setEmploymentHistory={setEmploymentHistory}
          />
        </EditorSection>
      </form>
    </div>
  );
};

export default ResumeEditor;
