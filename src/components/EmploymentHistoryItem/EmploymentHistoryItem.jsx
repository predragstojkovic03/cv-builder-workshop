import './EmploymentHistoryItem.css';

const EmploymentHistoryItem = ({ history }) => {
  return (
    <div className='flex flex-column justify-content-center'>
      {(history.item.startDate || history.item.endDate) && (
        <div className='employmentHistoryItemDate'>
          {history.item.startDate + ' to ' + history.item.endDate}
        </div>
      )}
      <div className='employmentHistoryItemMain'>
        <span className='companyNameLabel'>{history.item.companyName}</span>
        {history.item.jobTitle && (
          <span className='jobTitleLabel'>{' @ ' + history.item.jobTitle}</span>
        )}
      </div>
    </div>
  );
};

export default EmploymentHistoryItem;
