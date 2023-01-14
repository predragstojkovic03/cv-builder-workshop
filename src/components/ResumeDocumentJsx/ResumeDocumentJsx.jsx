/*
  Komponenta se zove ResumeDocumentJsx jer je pre postojala komponenta ResumeDocument koja je bila instant renderovani pdf,
  ali se sad koristi JSX(Html) pa sam tako nazavao komponentu
*/

import React from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';

import './ResumeDocumentJsx.css';

const ResumeDocumentJsx = ({
  personalDetails: {
    firstName,
    lastName,
    wantedJobTitle,
    imageUrl,
    email,
    phone,
  },
  innerRef,
}) => {
  return (
    <div className='resumeDocument' ref={innerRef}>
      <div className='aside'>
        <div className='heading'>
          {imageUrl && (
            <div className='img-container'>
              <img className='profile-img' alt='Profile' src={imageUrl} />
            </div>
          )}
          <h1 className='firstName'>{firstName}</h1>
          <h1 className='lastName'>{lastName}</h1>
          {wantedJobTitle && (
            <h3 className='wantedJobTitle'>{wantedJobTitle}</h3>
          )}
        </div>
        <div className='socialAndMail'>
          {phone && (
            <div className='socialIconAndText'>
              <BsFillTelephoneFill className='icon' />{' '}
              <p className='text'>{phone}</p>
            </div>
          )}
          {email && (
            <div className='socialIconAndText'>
              <AiOutlineMail className='icon' /> <p className='text'>{email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeDocumentJsx;
