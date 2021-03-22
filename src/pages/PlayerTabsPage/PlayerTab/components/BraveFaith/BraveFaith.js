import React from 'react';
import StatCalculator from "../../../../../components/StatCalculator/StatCalculator";
import useEquipment from "../../../../../hooks/useEquipment";
import weaponService from "../../../../../services/weaponService";
import weaponTypeService from "../../../../../services/weaponTypeService";
import StatisticGenericWrapper from "../../../../../components/StatisticGenericWrapper/StatisticGenericWrapper";

const BraveFaith = ({ equipment, playerId, statistics, field = 'fa', label = 'Faith' }) => {
  const { getEquipment: getWeapon } = useEquipment('weaponList', 'weaponTypeList', weaponService, weaponTypeService);

  const getWeaponBraveFaith = React.useCallback(w => {
    if (equipment[w] && equipment[w].equipmentId) {
      const weapon = getWeapon(equipment[w].equipmentId);
      return weapon[field];
    }
    return 0;
  }, [field, equipment, getWeapon]);

  const getStatValue = React.useCallback(stat => {
    if (statistics[stat]) {
      const firstWeaponBraveFaith = getWeaponBraveFaith('firstWeapon');
      const secondWeaponBraveFaith = getWeaponBraveFaith('secondWeapon');
      const customValue = statistics[stat].custom;
      const result = firstWeaponBraveFaith + secondWeaponBraveFaith + customValue;
      return result;
    }
    return 0;
  }, [statistics, getWeaponBraveFaith]);

  return <StatisticGenericWrapper
    value={getStatValue(field)}
    field={`statistics.${field}.custom`}
    playerId={playerId}
    label={label}
    Component={StatCalculator}
    margin='0px 0px 5px 0px'
  />;
};
export default BraveFaith;
