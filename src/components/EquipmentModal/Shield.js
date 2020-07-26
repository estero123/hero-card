import React from 'react';
import Text from "../Text/Text";
import { Container, StatsWrapper, Wrapper } from "./Weapon.style";
import Select from "../Select/Select";
import StatCalculator from "../StatCalculator/StatCalculator";
import StatisticGenericWrapper from "../StatisticGenericWrapper/StatisticGenericWrapper";

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

const Shield = ({label, shield, playerId, field}) => {
  return <Container>
    <Text margin='0px 6px 0px 0px'>{label}:</Text>
    <StatsWrapper>
      <Wrapper>
        <StatisticGenericWrapper
          selected={shield.item}
          field={`equipment.${field}.item`}
          playerId={playerId}
          options={options}
          Component={Select}
        />
      </Wrapper>
      <StatisticGenericWrapper
        key={`smEv-${field}`}
        value={shield.statistics.smEv}
        field={`equipment.${field}.statistics.smEv`}
        playerId={playerId}
        label="SMev"
        margin='0px 6px 0px 12px'
        Component={StatCalculator}
      />
      <StatisticGenericWrapper
        key={`spEv-${field}`}
        value={shield.statistics.spEv}
        field={`equipment.${field}.statistics.spEv`}
        playerId={playerId}
        label="SPev"
        margin='0px 6px 0px 6px'
        Component={StatCalculator}
      />
    </StatsWrapper>
  </Container>
};
export default React.memo(Shield)
