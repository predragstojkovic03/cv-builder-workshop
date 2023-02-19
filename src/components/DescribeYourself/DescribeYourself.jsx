import TextArea from '../TextArea/TextArea';

const DescribeYourself = ({ describeYourself, setDescribeYourself }) => {
  return (
    <TextArea
      height='200px'
      maxlength='450'
      resize='none'
      value={describeYourself}
      onChange={(e) => setDescribeYourself(e.target.value)}
    />
  );
};

export default DescribeYourself;
