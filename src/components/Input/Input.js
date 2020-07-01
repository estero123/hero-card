import React from 'react';
import { StyledInput } from "./Input.style";

const Input = ({placeholder, width, height, margin, value, onChange}) => {
  return <StyledInput type="text" margin={margin} style={{width, height}} placeholder={placeholder} value={value} onChange={onChange} />
};

export default Input;
