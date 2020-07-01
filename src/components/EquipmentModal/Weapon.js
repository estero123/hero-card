import React from 'react';
import Select from "../Select/Select";
import { Container, StatsWrapper, Wrapper } from "./Weapon.style";
import StatCalculator from "../StatCalculator/StatCalculator";
import Text from "../Text/Text";

const options = [
  {
    label: 'Weapon 1',
    value: 'W-1'
  },
  {
    label: 'Weapon 2',
    value: 'W-2'
  }
]

const Weapon = ({ label }) => {

  return <Container>
    <Text margin='0px 6px 0px 0px'>{label}:</Text>
    <StatsWrapper>
    <Wrapper>
    <Select options={options} onChange={() => {}} selected={{}} />
    <Select options={options} onChange={() => {}} selected={{}} />
    </Wrapper>
      <StatCalculator margin='0px 6px 0px 12px' label='DMG: 0.0' />
      <StatCalculator margin='0px 6px 0px 6px' label='Wev: 0.0' />
      <StatCalculator margin='0px 6px 0px 6px' label='WP: 0.0' />
    </StatsWrapper>
  </Container>
};
export default Weapon;
