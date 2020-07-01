import React, { useState } from 'react';
import { Wrapper } from "./StatCalculator.style";
import Input from "../Input/Input";
import PlainButton from "../PlainButton/PlainButton";
import Text from "../Text/Text";

const StatCalculator = ({label, margin, onChange, value}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = React.useCallback(event => {
    setInputValue(event.target.value);
  }, [setInputValue]);

  const onSubmit = React.useCallback(() => {
    const obj = {
      target: {
        value: inputValue
      }
    };
    onChange(obj);
    setInputValue('');
  }, [inputValue, onChange]);

  return <Wrapper margin={margin}>
    <Text margin='0px 3px 0px 0px'>{label}: {value}</Text>
    <Input width='30px' height='15px' placeholder='+' value={inputValue} onChange={handleInputChange} />
    <PlainButton onClick={onSubmit}> > </PlainButton>
  </Wrapper>
};

export default StatCalculator;
