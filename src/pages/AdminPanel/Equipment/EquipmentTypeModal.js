import AdminModal from "../../../components/AdminModal/AdminModal";
import React from "react";

const formJson = [
  {
    label: 'Label',
    name: 'label',
    component: 'input',
    type: 'text',
    placeholder: 'Label',
    required: true
  }
];

const EquipmentTypeModal = ({ isOpen, onClose, onSubmit, initialValues }) => {

  return <AdminModal
    title="Type Modal"
    isOpen={isOpen}
    onSubmit={onSubmit}
    formJson={formJson}
    onClose={onClose}
    initialValues={initialValues}
  />
};

export default EquipmentTypeModal;
