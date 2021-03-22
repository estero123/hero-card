import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setEquipmentList, setPlayerField } from "../reducers/playersReducer/playersActions";

/**
 *
 * @param listName
 * @param typeListName
 * @param listService
 * @param typeListService
 * @param item
 * @param playerId
 * @param field
 * @returns {{getEquipmentPropValue: (function(*): *|number), equipmentTypeList, isLoaded: boolean, getEquipment: (function(*): *), equipmentList}}
 */
const useEquipment = (listName, typeListName, listService, typeListService, item, playerId, field) => {
  const dispatch = useDispatch();
  const equipmentList = useSelector(state => state.gameState[listName]);
  const equipmentTypeList = useSelector(state => state.gameState[typeListName]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchGenericList = React.useCallback(async (service, list) => {
    const response = await service.getList();
    if (response && response.status === 200) {
      const data = {
        equipmentField: list,
        value: response.data
      };
      dispatch(setEquipmentList(data));
      setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, [dispatch]);


  useEffect(() => {
    if (!equipmentList && listService) {
      fetchGenericList(listService, listName);
    }
    if (!equipmentTypeList && typeListService) {
      fetchGenericList(typeListService, typeListName);
    }

    if (equipmentList && equipmentTypeList) {
        setIsLoaded(true);
    }
  }, [fetchGenericList, equipmentList, equipmentTypeList, listName, listService, typeListName, typeListService]);

  const getEquipment = React.useCallback(equipmentId => {
    if (!equipmentList) {
      fetchGenericList(listService, listName);
      return;
    }
    const item = (equipmentList || []).find(eq => eq.id === equipmentId);
    return item;
  }, [equipmentList, fetchGenericList, listName, listService]);

  const getEquipmentPropValue = React.useCallback(field => {
    const eq = item.equipmentId && getEquipment(item.equipmentId);
    const propValue = eq ? eq[field] : 0;
    return Number(propValue);
  }, [item, getEquipment]);

  const onResetEquipmentType = React.useCallback(e => {
    const { value: itemTypeId } = e;
    const items = equipmentList.filter(i => i.typeId === itemTypeId);
    const typeId = items && items[0] ? items[0].id : '';
    const data = {
      playerId,
      field: `equipment.${field}.equipmentId`,
      value: typeId
    };
    dispatch(setPlayerField(data));
  }, [dispatch, equipmentList, field, playerId]);

  return { equipmentList, isLoaded, getEquipment, equipmentTypeList, getEquipmentPropValue, onResetEquipmentType };
};

useEquipment.propTypes = {
  listName: PropTypes.string.isRequired,
  typeListName: PropTypes.string.isRequired,
  listService: PropTypes.shape.isRequired,
  typeListService: PropTypes.shape.isRequired,
  item: PropTypes.shape.isRequired,
  playerId: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired
};

export default useEquipment;


