import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import DescribeYourself from '../DescribeYourself/DescribeYourself';
import EditorSection from '../EditorSection/EditorSection';
import Education from '../Education/Education';
import EmploymentHistory from '../EmploymentHistory/EmploymentHistory';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import Skills from '../Skills/Skills';
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
  skills,
  setSkills,
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
        Kreiraj svoj CV{' '}
        <Button styleClasses='btn btn-primary' onClick={() => navigate('/')}>
          Nazad na početnu
        </Button>
      </div>{' '}
      <form>
        <EditorSection heading='Lične informacije'>
          <PersonalDetails
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
          />
        </EditorSection>

        <EditorSection
          heading='Opiši sebe'
          infoText='U kratkim crtama, opiši svoj profil što bolje i sa što više entuzijazma.'
        >
          <DescribeYourself
            describeYourself={describeYourself}
            setDescribeYourself={setDescribeYourself}
          />
        </EditorSection>

        <EditorSection heading='Radno iskustvo'>
          <EmploymentHistory
            removeEmploymentHistoryItem={removeEmploymentHistoryItem}
            employmentHistory={employmentHistory}
            setEmploymentHistory={setEmploymentHistory}
            setModalState={setModalState}
          />
        </EditorSection>

        <EditorSection heading='Obrazovanje'>
          <Education
            education={education}
            setEducation={setEducation}
            setModalState={setModalState}
          />
        </EditorSection>
        <EditorSection heading='Veštine'>
          <Skills
            skills={skills}
            setSkills={setSkills}
            setModalState={setModalState}
          />
        </EditorSection>
      </form>
    </div>
  );
};

export default ResumeEditor;
