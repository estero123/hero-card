import React from 'react';
import { StyledOption, StyledSelect } from "./Select.style";

const Select = ({ options = [], onChange = () => {}, selected = {}, margin, valueProp = 'id' }) => {

  return <StyledSelect margin={margin} value={selected} onChange={onChange}>
    {(options || []).map((option,index) => {
      return <StyledOption key={index} value={option[valueProp]}>{option.label}</StyledOption>
    })}
  </StyledSelect>
};



export default React.memo(Select);
