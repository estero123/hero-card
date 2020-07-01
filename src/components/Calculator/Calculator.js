import React from 'react';
import Text from "../Text/Text";
import Input from "../Input/Input";
import { Wrapper } from "./Calculator.style";

const Calculator = ({ label }) => {
  return <Wrapper>
    <Text margin='0px 3px 0px 0px'>{label}:</Text>
    <Input width='30px' height='15px'/>
  </Wrapper>
};
export default Calculator
