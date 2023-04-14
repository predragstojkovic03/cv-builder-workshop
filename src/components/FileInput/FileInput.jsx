import Button from '../Button/Button';

import './FileInput.css';

const FileInput = ({ labelText, btnText = 'Izaberi', name, onChange }) => {
  return (
    <div className='inputGroup'>
      <label>{labelText}</label>
      <Button styleClasses='btn btn-primary relative overflow-hidden'>
        {btnText}
        <input
          type='file'
          className='fileInput'
          name={name}
          onChange={(e) => onChange(e)}
        />
      </Button>
    </div>
  );
};

export default FileInput;
