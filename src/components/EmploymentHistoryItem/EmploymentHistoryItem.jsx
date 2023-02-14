const EmploymentHistoryItem = ({ history }) => {
  return (
    <p>
      {history.id} | {history.companyName}
    </p>
  );
};

export default EmploymentHistoryItem;
