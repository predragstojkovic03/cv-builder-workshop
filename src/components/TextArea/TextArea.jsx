import './TextArea.css';

const TextArea = ({
  labelText,
  name,
  type = 'text',
  onChange,
  value,
  maxlength = '200',
  height = '200px',
  resize = 'both',
}) => {
  return (
    <div className='textAreaGroup fullWidth'>
      <label>{labelText}</label>
      <textarea
        type={type}
        name={name}
        value={value}
        style={{ height: height, resize: resize }}
        maxLength={maxlength}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default TextArea;
