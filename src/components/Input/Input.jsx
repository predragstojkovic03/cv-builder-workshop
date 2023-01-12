import './Input.css';

const Input = ({ labelText, name, type = 'text', onChange }) => {
  return (
    <div className='inputGroup'>
      <label>{labelText}</label>
      <input type={type} name={name} onChange={(e) => onChange(e)} />
    </div>
  );
};

export default Input;
