import React from 'react';
import Text from "../Text/Text";
import { Container, StatsWrapper, Wrapper } from "./Weapon.style";
import Select from "../Select/Select";
import StatisticGenericWrapper from "../StatisticGenericWrapper/StatisticGenericWrapper";

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

const StandardEquipment = ({label, item, playerId, field}) => {
  return <Container>
    <Text margin='0px 6px 0px 0px'>{label}:</Text>
    <StatsWrapper>
      <Wrapper>
        <StatisticGenericWrapper
          selected={item.type}
          field={`equipment.${field}.type`}
          playerId={playerId}
          options={options}
          Component={Select}
        />
        <StatisticGenericWrapper
          selected={item.item}
          field={`equipment.${field}.item`}
          playerId={playerId}
          options={options}
          Component={Select}
        />
      </Wrapper>
    </StatsWrapper>
  </Container>
};
export default StandardEquipment
