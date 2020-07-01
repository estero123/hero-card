import React from 'react';
import Text from "../Text/Text";
import { Container, StatsWrapper, Wrapper } from "./Weapon.style";
import Select from "../Select/Select";
import StatCalculator from "../StatCalculator/StatCalculator";

const options = [
  {
    label: 'Shield 1',
    value: 'S-1'
  },
  {
    label: 'Shield 2',
    value: 'S-2'
  }
];

const Shield = ({label}) => {
  return <Container>
    <Text margin='0px 6px 0px 0px'>{label}:</Text>
    <StatsWrapper>
      <Wrapper>
        <Select options={options} onChange={() => {}} selected={{}} />
      </Wrapper>
      <StatCalculator margin='0px 6px 0px 12px' label='SMev: 0.0' />
      <StatCalculator margin='0px 6px 0px 6px' label='SPev: 0.0' />
    </StatsWrapper>
  </Container>
};
export default Shield
