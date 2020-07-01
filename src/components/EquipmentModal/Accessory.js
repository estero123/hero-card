import React from 'react';
import Text from "../Text/Text";
import { Container, StatsWrapper, Wrapper } from "./Weapon.style";
import Select from "../Select/Select";
import StatCalculator from "../StatCalculator/StatCalculator";

const options = [
  {
    label: 'Accessory 1',
    value: 'A-1'
  },
  {
    label: 'Accessory 2',
    value: 'A-2'
  }
];

const Accessory = ({label}) => {
  return <Container>
    <Text margin='0px 6px 0px 0px'>{label}:</Text>
    <StatsWrapper>
      <Wrapper>
        <Select options={options} onChange={() => {}} selected={{}} />
      </Wrapper>
      <StatCalculator margin='0px 6px 0px 12px' label='AMSev: 0.0' />
      <StatCalculator margin='0px 6px 0px 6px' label='APSev: 0.0' />
    </StatsWrapper>
  </Container>
};
export default Accessory
