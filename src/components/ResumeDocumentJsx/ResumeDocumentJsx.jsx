/*
  Komponenta se zove ResumeDocumentJsx jer je pre postojala komponenta ResumeDocument koja je bila instant renderovani pdf,
  ali se sad koristi JSX(Html) pa sam tako nazavao komponentu
*/

import React from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { IoEarth } from 'react-icons/io5';

import './ResumeDocumentJsx.css';

const ResumeDocumentJsx = ({
  personalDetails: {
    firstName,
    lastName,
    wantedJobTitle,
    imageUrl,
    email,
    phone,
    country,
    city,
    address,
  },
  describeYourself,
  education,
  skills,
  employmentHistory,
  innerRef,
  selectedThemeColor,
}) => {
  const levelText = (level) => {
    switch (Number(level)) {
      case 1:
        return 'Beginner';

      case 2:
        return 'Intermediate';

      case 3:
        return 'Expert';

      default:
        return '';
    }
  };

  return (
    <div className='resumeDocument' ref={innerRef}>
      <div className={`aside ${selectedThemeColor}`}>
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
          {describeYourself && (
            <div className='describeYourself'>
              <h3>About me</h3>
              <p>{describeYourself}</p>
            </div>
          )}
        </div>

        <div className='socialAndMail'>
          {country && city && (
            <div className='socialIconAndText'>
              <IoEarth className='icon' />{' '}
              <p className='text'>{`${country}, ${city}`}</p>
            </div>
          )}
          {address && (
            <div className='socialIconAndText'>
              <MdLocationOn className='icon' />{' '}
              <p className='text'>{address}</p>
            </div>
          )}
          {phone && (
            <div className='socialIconAndText'>
              <BsFillTelephoneFill className='icon' />{' '}
              <p className='text'>{phone}</p>
            </div>
          )}
          {email && (
            <div className='socialIconAndText'>
              <AiOutlineMail className='icon' />{' '}
              <a href={`mailto:${email}`} className='text'>
                {email}
              </a>
            </div>
          )}
        </div>
      </div>
      <div className='mainContent'>
        <h2>Education</h2>
        <ul>
          {education.map((item) => (
            <li>
              <div className='listItemHeading'>
                {item.school} - {item.startDate} to {item.endDate}
              </div>
              <div className='listItemSubheading'>{item.degree}</div>
              <div className='listItemDescription'>{item.description}</div>
            </li>
          ))}
        </ul>

        <h2>Employment history</h2>
        <ul>
          {employmentHistory.map((item) => (
            <li>
              <div className='listItemHeading'>
                {item.companyName} - {item.startDate} to {item.endDate}
              </div>
              <div className='listItemSubheading'>{item.jobTitle}</div>
              <div className='listItemDescription'>{item.description}</div>
            </li>
          ))}
        </ul>

        <h2>Skills</h2>
        <ul>
          {skills.map((item) => (
            <li>
              <div className='listItemHeading'>{item.name}</div>
              <div className='listItemSubheading'>
                {item.doesWantDisplay && levelText(item.level)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeDocumentJsx;
