import './EducationItem.css';

const EducationItem = ({ education }) => {
  return (
    <div className='flex flex-column justify-content-center'>
      {(education.item.startDate || education.item.endDate) && (
        <div className='educationItemDate'>
          {education.item.startDate + ' to ' + education.item.endDate}
        </div>
      )}
      <div className='educationItemMain'>
        <span className='schoolLabel'>{education.item.school}</span>
        {education.item.degree && (
          <span className='degreeLabel'>{' @ ' + education.item.degree}</span>
        )}
      </div>
    </div>
  );
};

export default EducationItem;
