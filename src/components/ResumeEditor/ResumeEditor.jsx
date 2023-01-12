import PersonalDetails from '../PersonalDetails/PersonalDetails';
import './ResumeEditor.css';

const ResumeEditor = ({ personalDetails, setPersonalDetails }) => {
  return (
    <div className='resumeEditorWrapper'>
      <div className='resumeEditorHeading'>Create your Resume</div>

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
