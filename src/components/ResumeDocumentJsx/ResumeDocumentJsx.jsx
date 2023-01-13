import React from 'react';

import './ResumeDocumentJsx.css';

const ResumeDocumentJsx = ({ firstName, lastName, innerRef }) => {
  return (
    <div className='resumeDocument' ref={innerRef}>
      <div className='aside'>
        <h1 className='firstName'>{firstName}</h1>
        <h1 className='lastName'>{lastName}</h1>
      </div>
    </div>
  );
};

export default ResumeDocumentJsx;
