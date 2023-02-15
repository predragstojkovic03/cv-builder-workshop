import React from 'react';

const EditorSection = ({ heading, children }) => {
  return (
    <div className='editorSectionWrapper'>
      <h2>{heading}</h2>
      {children}
    </div>
  );
};

export default EditorSection;
