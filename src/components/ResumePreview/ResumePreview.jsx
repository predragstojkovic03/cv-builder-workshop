import ResumeDocumentJsx from '../ResumeDocumentJsx/ResumeDocumentJsx';
import Button from '../Button/Button';
import { BiDownload } from 'react-icons/bi';
import { BiCheck } from 'react-icons/bi';

import './ResumePreview.css';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

const ResumePreview = ({ personalDetails, previewActive }) => {
  const [showDonwloadOverlay, setShowDonwloadOverlay] = useState(false);
  const themeColors = [
    'theme-red',
    'theme-blue',
    'theme-green',
    'theme-dark-blue',
  ];
  const [selectedThemeColor, setSelectedThemeColor] = useState('theme-red');

  const resumeToPrintRef = useRef();

  const printResume = useReactToPrint({
    content: () => resumeToPrintRef.current,
    documentTitle: 'Vaš CV',
    removeAfterPrint: false, // It is false by default but if set true, on mobile phones print will not work!
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
    <div
      className={`resumePreviewWrapper ${
        previewActive ? 'resumeShowingResponsive' : 'resumeNotShowing'
      }`}
    >
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
