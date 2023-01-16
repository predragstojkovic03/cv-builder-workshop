import ResumeDocumentJsx from '../ResumeDocumentJsx/ResumeDocumentJsx';
import Button from '../Button/Button';
import { BiDownload } from 'react-icons/bi';
import { BiCheck } from 'react-icons/bi';
import ResumeShowingEnum from '../../enums/ResumeShowingEnum';

import './ResumePreview.css';
import { useRef, useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';

const ResumePreview = ({ personalDetails, resumeResponsiveShowing }) => {
  const [showDonwloadOverlay, setShowDonwloadOverlay] = useState(false);
  const [themeColors, setThemeColors] = useState([
    'theme-red',
    'theme-blue',
    'theme-green',
    'theme-dark-blue',
  ]);
  const [selectedThemeColor, setSelectedThemeColor] = useState('theme-red');

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

  const changeThemeColor = (color) => {
    setSelectedThemeColor(color);
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
          selectedThemeColor={selectedThemeColor}
        />
      </div>
      <div className='themeColors'>
        {themeColors.map((color, idx) => (
          <div
            key={idx + 3}
            onClick={() => changeThemeColor(color)}
            className={`colorCircle ${color} `}
          >
            {color === selectedThemeColor && <BiCheck />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumePreview;
