import React from 'react';
import Text from "../Text/Text";
import { Container, StatsWrapper, Wrapper } from "./Weapon.style";
import Select from "../Select/Select";
import StatCalculator from "../StatCalculator/StatCalculator";
import StatisticGenericWrapper from "../StatisticGenericWrapper/StatisticGenericWrapper";

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

const Accessory = ({label, accessory, playerId}) => {
  return <Container>
    <Text margin='0px 6px 0px 0px'>{label}:</Text>
    <StatsWrapper>
      <Wrapper>
        <StatisticGenericWrapper
          selected={accessory.item}
          field={`equipment.accessory.item`}
          playerId={playerId}
          options={options}
          Component={Select}
        />
      </Wrapper>
      <StatisticGenericWrapper
        key='amSev'
        value={accessory.statistics.amSev}
        field={`equipment.accessory.statistics.amSev`}
        playerId={playerId}
        label="AMSev"
        margin='0px 6px 0px 12px'
        Component={StatCalculator}
      />
      <StatisticGenericWrapper
        key='apSev'
        value={accessory.statistics.apSev}
        field={`equipment.accessory.statistics.apSev`}
        playerId={playerId}
        label="APSev"
        margin='0px 6px 0px 6px'
        Component={StatCalculator}
      />
    </StatsWrapper>
  </Container>
};
export default Accessory
