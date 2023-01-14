import './Input.css';

const Input = ({ labelText, name, type = 'text', onChange, value }) => {
  return (
    <div className='inputGroup'>
      <label>{labelText}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
