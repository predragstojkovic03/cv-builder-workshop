import PDFViewer from '../PDFViewer/PDFViewer';

import ResumeDocument from '../ResumeDocument/ResumeDocument';

import './ResumePreview.css';

const ResumePreview = ({ firstName, lastName }) => {
  return (
    <div className='resumePreviewWrapper'>
      <div className='resumePreviewContent'>
        <div className='documentWrapper'>
          <PDFViewer>
            <ResumeDocument firstName={firstName} lastName={lastName} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
