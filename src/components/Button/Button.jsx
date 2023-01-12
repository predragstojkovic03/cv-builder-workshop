import React from 'react';
import './Button.css';

const Button = ({ children, type = 'button', onClick, styleClasses }) => {
  return (
    <button onClick={onClick} type={type} className={styleClasses}>
      {children}
    </button>
  );
};

export default Button;
