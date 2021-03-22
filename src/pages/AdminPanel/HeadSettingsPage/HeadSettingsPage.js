import React from 'react';
import Spinner from "../../../components/Loader/Spinner";
import useCRUD from "../../../hooks/useCRUD";
import headTypeService from "../../../services/headTypeService";
import headService from "../../../services/headService";
import Select from "../../../components/FormComponents/Select/Select";
import EquipmentType from "../Equipment/EquipmentType";
import EquipmentList from "../Equipment/EquipmentList";

const HeadSettingsPage = () => {
  const { list: equipmentTypes, isLoaded: isEquipmentTypeLoaded, addItem: addEquipmentType, deleteItem: deleteEquipmentType, updateItem: updateEquipmentType } = useCRUD(headTypeService);
  const { list: headList, isLoaded: isEquipmentLoaded, addItem: addEquipment, deleteItem: deleteEquipment, updateItem: updateEquipment } = useCRUD(headService);

  const headTypeMethods = {
    addItem: addEquipmentType,
    deleteItem: deleteEquipmentType,
    updateItem: updateEquipmentType
  };

  const headMethods = {
    addItem: addEquipment,
    deleteItem: deleteEquipment,
    updateItem: updateEquipment
  };

  const formJson = [
    {
      label: 'Label',
      name: 'label',
      component: 'input',
      type: 'text',
      placeholder: 'Label',
      required: true
    },
    {
      label: 'Type',
      name: 'typeId',
      component: Select,
      options: equipmentTypes,
      placeholder: 'Type',
      required: true
    },
    {
      label: 'HP',
      name: 'hp',
      component: 'input',
      type: 'number',
      placeholder: 'HP',
      required: true
    },
    {
      label: 'MP',
      name: 'mp',
      component: 'input',
      type: 'number',
      placeholder: 'MP',
      required: true
    },
    {
      label: 'PA',
      name: 'pa',
      component: 'input',
      type: 'number',
      placeholder: 'PA',
      required: true
    },
    {
      label: 'MA',
      name: 'ma',
      component: 'input',
      type: 'number',
      placeholder: 'MA',
      required: true
    },
    {
      label: 'SP',
      name: 'sp',
      component: 'input',
      type: 'number',
      placeholder: 'SP',
      required: true
    },
    {
      label: 'Description',
      name: 'description',
      component: 'input',
      type: 'text',
      placeholder: 'Description'
    },
  ];

  return (
    <>
      <h2>Head Settings</h2>
      <Spinner isLoaded={isEquipmentTypeLoaded}>
        <EquipmentType methods={headTypeMethods} types={equipmentTypes}/>
      </Spinner>
      <Spinner isLoaded={isEquipmentTypeLoaded && isEquipmentLoaded}>
        <EquipmentList formJson={formJson} types={equipmentTypes} list={headList} methods={headMethods}/>
      </Spinner>
    </>
  )
};

export default HeadSettingsPage;
