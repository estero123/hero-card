import React from 'react';
import AdminModal from "../../../components/AdminModal/AdminModal";

const formJson = [
  {
    label: 'Label',
    name: 'label',
    component: 'input',
    type: 'text',
    placeholder: 'Label',
    required: true
  },
];

const GenderModal = ({ isOpen, onClose, onSubmit, initialValues }) => {

  return <AdminModal
    title="Gender Modal"
    isOpen={isOpen}
    onSubmit={onSubmit}
    formJson={formJson}
    onClose={onClose}
    initialValues={initialValues}
  />
};

export default GenderModal;
