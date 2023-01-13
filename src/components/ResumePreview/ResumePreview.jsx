import ResumeDocumentJsx from '../ResumeDocumentJsx/ResumeDocumentJsx';
import './ResumePreview.css';

const ResumePreview = ({ firstName, lastName }) => {
  return (
    <div className='resumePreviewWrapper'>
      <div className='resumePreviewContent'>
        <div className='documentWrapper'>
          <ResumeDocumentJsx firstName={firstName} lastName={lastName} />
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
