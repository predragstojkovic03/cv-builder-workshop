import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import DescribeYourself from '../DescribeYourself/DescribeYourself';
import EditorSection from '../EditorSection/EditorSection';
import Education from '../Education/Education';
import EmploymentHistory from '../EmploymentHistory/EmploymentHistory';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import './ResumeEditor.css';

const ResumeEditor = ({
  personalDetails,
  setPersonalDetails,
  employmentHistory,
  setEmploymentHistory,
  education,
  setEducation,
  setModalState,
  describeYourself,
  setDescribeYourself,
}) => {
  const navigate = useNavigate();

  const removeEmploymentHistoryItem = (id) => {
    const updatedData = employmentHistory.filter(
      (history) => history.id !== id
    );

    setEmploymentHistory(updatedData);
  };

  return (
    <div className='resumeEditorWrapper'>
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

        <EditorSection
          heading='Describe yourself'
          infoText='In short terms, describe your profile as best and as enthusiastic you can.'
        >
          <DescribeYourself
            describeYourself={describeYourself}
            setDescribeYourself={setDescribeYourself}
          />
        </EditorSection>

        <EditorSection heading='Employment History'>
          <EmploymentHistory
            removeEmploymentHistoryItem={removeEmploymentHistoryItem}
            employmentHistory={employmentHistory}
            setEmploymentHistory={setEmploymentHistory}
            setModalState={setModalState}
          />
        </EditorSection>

        <EditorSection heading='Education'>
          <Education
            education={education}
            setEducation={setEducation}
            setModalState={setModalState}
          />
        </EditorSection>
      </form>
    </div>
  );
};

export default ResumeEditor;
