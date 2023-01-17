import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import './ResumeEditor.css';

const ResumeEditor = ({
  personalDetails,
  setPersonalDetails,
  previewActive,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`resumeEditorWrapper ${previewActive ? 'display-none' : ''}`}
    >
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
      </form>
    </div>
  );
};

export default ResumeEditor;
