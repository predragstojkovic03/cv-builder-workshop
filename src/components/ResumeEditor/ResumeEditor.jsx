import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import EmploymentHistory from '../EmploymentHistory/EmploymentHistory';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import './ResumeEditor.css';

const ResumeEditor = ({ personalDetails, setPersonalDetails }) => {
  const navigate = useNavigate();

  return (
    <div className={`resumeEditorWrapper`}>
      <div className='resumeEditorHeading'>
        Create your Resume{' '}
        <Button styleClasses='btn btn-primary' onClick={() => navigate('/')}>
          Back to homepage
        </Button>
      </div>{' '}
      <form>
        <PersonalDetails
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <EmploymentHistory />
      </form>
    </div>
  );
};

export default ResumeEditor;
