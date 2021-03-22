import React, { useState } from 'react';
import PropTypes from "prop-types";
import { AddButton } from "../GenderSettingsPage/GenderSettingsPage.style";
import ResponsiveTable from "../../../components/ResponsiveTable/ResponsiveTable";
import EquipmentTypeModal from "./EquipmentTypeModal";

const EquipmentType = ({ types, methods }) => {
  const [initialValues, setInitialValues] = useState({});
  const [isTypeModalOpen, setTypeModalOpen] = useState(false);

  const { addItem, updateItem, deleteItem } = methods;

  const toggleTypeModal = () => {
    setInitialValues({});
    setTypeModalOpen(isOpen => !isOpen)
  };

  const handleAddType = React.useCallback(async item => {
    await addItem(item);
    setInitialValues({});
    setTypeModalOpen(false);
  }, [addItem]);

  const handleUpdateType = React.useCallback(async item => {
    await updateItem(item);
    setInitialValues({});
    setTypeModalOpen(false);
  }, [updateItem]);

  const triggerUpdateType = React.useCallback(data => {
    setInitialValues(data);
    setTypeModalOpen(true);
  }, []);

  const deleteType = React.useCallback(async id => {
    await deleteItem(id)
  }, [deleteItem]);

  const ActionsCell = ({data}) => {
    return <div key={data.id}>
      <button onClick={() => triggerUpdateType(data)}>Edit</button>
      <button onClick={() => deleteType(data.id)}>Delete</button>
    </div>
  };

  const columns = [
    {
      label: 'ID',
      accessor: 'id'
    },
    {
      label: 'Label',
      accessor: 'label'
    },
    {
      label: "Actions",
      accessor: '',
      customCell: ActionsCell
    }
  ];

  return (
    <>
      <h3>Types</h3>
      <AddButton onClick={toggleTypeModal}>add type</AddButton>
      <ResponsiveTable list={types} columns={columns}/>
      <EquipmentTypeModal initialValues={initialValues} onSubmit={initialValues.id ? handleUpdateType : handleAddType} isOpen={isTypeModalOpen} onClose={() => setTypeModalOpen(false)}/>
    </>
  )
};

EquipmentType.displayName = "EquipmentType";
EquipmentType.propTypes = {
  types: PropTypes.array.isRequired
};

export default EquipmentType
