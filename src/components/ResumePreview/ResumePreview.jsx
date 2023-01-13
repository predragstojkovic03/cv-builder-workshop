import ResumeDocumentJsx from '../ResumeDocumentJsx/ResumeDocumentJsx';
import Button from '../Button/Button';
import { BiDownload } from 'react-icons/bi';

import './ResumePreview.css';
import { useRef, useState } from 'react';
//import generatePDF from '../../utils/generatePDF';
import { useReactToPrint } from 'react-to-print';

const ResumePreview = ({ firstName, lastName }) => {
  const [showDonwloadOverlay, setShowDonwloadOverlay] = useState(false);

  const resumeToPrintRef = useRef();

  const printResume = useReactToPrint({
    content: () => resumeToPrintRef.current,
  });

  const onMouseOver = () => {
    setShowDonwloadOverlay(true);
  };

  const onMouseLeave = () => {
    setShowDonwloadOverlay(false);
  };

  return (
    <div className='resumePreviewWrapper'>
      <div
        className='documentWrapper'
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        <div
          className='download-overlay'
          style={{ display: showDonwloadOverlay ? 'block' : 'none' }}
          onClick={() => printResume()}
        >
          <Button
            styleClasses='btn btn-primary btn-circle btn-download-pdf'
            onClick={() => printResume()}
          >
            <div className='flex aling-items-center justify-content-center'>
              {<BiDownload />}
            </div>
          </Button>
        </div>
        <ResumeDocumentJsx
          innerRef={resumeToPrintRef}
          firstName={firstName}
          lastName={lastName}
        />
      </div>
    </div>
  );
};

export default ResumePreview;
