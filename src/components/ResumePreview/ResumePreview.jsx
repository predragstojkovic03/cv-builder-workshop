import ResumeDocumentJsx from '../ResumeDocumentJsx/ResumeDocumentJsx';
import Button from '../Button/Button';
import { BiDownload } from 'react-icons/bi';
import ResumeShowingEnum from '../../enums/ResumeShowingEnum';

import './ResumePreview.css';
import { useRef, useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';

const ResumePreview = ({ personalDetails, resumeResponsiveShowing }) => {
  const [showDonwloadOverlay, setShowDonwloadOverlay] = useState(false);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const [resumeShowingState, setResumeShowingState] = useState(
    windowSize[0] > 1200
      ? ResumeShowingEnum.ShowingRegular
      : ResumeShowingEnum.NotShowing
  );

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      console.log(windowSize[0]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  useEffect(() => {
    if (windowSize[0] > 1200)
      setResumeShowingState(ResumeShowingEnum.ShowingRegular);
    else if (windowSize[0] <= 1200 && resumeResponsiveShowing)
      setResumeShowingState(ResumeShowingEnum.ShowingResponsive);
    else setResumeShowingState(ResumeShowingEnum.NotShowing);
  }, [windowSize, resumeResponsiveShowing]);

  const resumeToPrintRef = useRef();

  const printResume = useReactToPrint({
    content: () => resumeToPrintRef.current,
    documentTitle: 'Vaš CV',
    removeAfterPrint: true,
  });

  const onMouseOver = () => {
    setShowDonwloadOverlay(true);
  };

  const onMouseLeave = () => {
    setShowDonwloadOverlay(false);
  };

  return (
    <div className={`resumePreviewWrapper ${resumeShowingState}`}>
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
          personalDetails={personalDetails}
        />
      </div>
    </div>
  );
};

export default ResumePreview;
