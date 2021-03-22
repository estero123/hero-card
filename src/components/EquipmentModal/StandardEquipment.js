import React from 'react';
import Text from "../Text/Text";
import { Container, StatsWrapper, Wrapper } from "./Weapon.style";
import Select from "../Select/Select";
import StatisticGenericWrapper from "../StatisticGenericWrapper/StatisticGenericWrapper";
import useEquipment from "../../hooks/useEquipment";

const StandardEquipment = ({ label, item, playerId, field, listProp, typeListProp, listService, typeService }) => {

  const { equipmentList, equipmentTypeList, onResetEquipmentType } = useEquipment(listProp, typeListProp, listService, typeService, item, playerId, field);

  const optionsFilteredByType = equipmentList && equipmentList.filter(w => w.typeId === item.typeId);

  return <Container>
    <Text margin='0px 6px 0px 0px'>{label}:</Text>
    <StatsWrapper>
      <Wrapper>
        <StatisticGenericWrapper
          selected={item.typeId}
          field={`equipment.${field}.typeId`}
          playerId={playerId}
          options={equipmentTypeList}
          customOnChange={onResetEquipmentType}
          Component={Select}
        />
        <StatisticGenericWrapper
          selected={item.equipmentId}
          field={`equipment.${field}.equipmentId`}
          playerId={playerId}
          options={optionsFilteredByType}
          Component={Select}
        />
      </Wrapper>
    </StatsWrapper>
  </Container>
};
export default StandardEquipment
