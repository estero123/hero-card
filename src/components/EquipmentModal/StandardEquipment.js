import React from 'react';
import Text from "../Text/Text";
import { Container, StatsWrapper, Wrapper } from "./Weapon.style";
import Select from "../Select/Select";

const options = [
  {
    label: 'Head 1',
    value: 'H-1'
  },
  {
    label: 'Body 1',
    value: 'B-1'
  }
];

const StandardEquipment = ({label}) => {
  return <Container>
    <Text margin='0px 6px 0px 0px'>{label}:</Text>
    <StatsWrapper>
      <Wrapper>
        <Select options={options} onChange={() => {}} selected={{}} />
        <Select options={options} onChange={() => {}} selected={{}} />
      </Wrapper>
    </StatsWrapper>
  </Container>
};
export default StandardEquipment
