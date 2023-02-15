import { useEffect, useRef, useState } from 'react';
import './EditorSection.css';

const EditorSection = ({ heading, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const toggleColapse = () => {
    setIsOpen((previousState) => !previousState);
  };

  const editorSectionContentRef = useRef();

  // TODO Fix useRef problem, because this solution is too risky

  return (
    <div className='editorSectionWrapper'>
      <div className='flex justify-content-space-between align-items-center'>
        <h2>{heading}</h2>
        <button
          type='button'
          onClick={toggleColapse}
          className='btn btn-primary'
        >
          Collapse
        </button>
      </div>
      <div
        className='editorSectionContent'
        ref={editorSectionContentRef}
        style={
          isOpen
            ? { height: editorSectionContentRef.current.scrollHeight + 'px' }
            : { height: '0px' }
        }
      >
        {children}
      </div>
    </div>
  );
};

export default EditorSection;
