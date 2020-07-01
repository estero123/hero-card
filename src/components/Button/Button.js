import React from 'react';
import './Button.css';
const Button = ({ children, width, onClick, margin }) => {
  return <button className="customButton" style={{width, margin}} onClick={onClick}>{children}</button>
};
export default React.memo(Button);
