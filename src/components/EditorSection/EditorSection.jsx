import { useRef, useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';

import './EditorSection.css';

const EditorSection = ({ heading, infoText, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleColapse = () => {
    setIsOpen((previousState) => !previousState);
  };

  const editorSectionContentRef = useRef();

  // TODO Fix useRef problem, because this solution is too risky

  return (
    <div className='editorSectionWrapper'>
      <div
        onClick={toggleColapse}
        style={{ cursor: 'pointer' }}
        className='flex justify-content-space-between align-items-center'
      >
        <h2>{heading}</h2>
        <button
          type='button'
          className={`btn btn-transparent collapseEditorSectionBtn ${
            isOpen ? 'sectionOpen' : ''
          }`}
        >
          <RiArrowUpSLine />
        </button>
      </div>
      <div
        className='editorSectionContent'
        ref={editorSectionContentRef}
        style={isOpen ? { height: 'fit-content' } : { height: '0px' }}
      >
        {infoText && <p className='editorSectionInfo'>{infoText}</p>}
        {children}
      </div>
      <hr className='editorSectionSeparator' />
    </div>
  );
};

export default EditorSection;
