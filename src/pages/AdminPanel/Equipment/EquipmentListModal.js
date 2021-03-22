import React from "react";
import PropTypes from "prop-types";
import AdminModal from "../../../components/AdminModal/AdminModal";

const EquipmentListModal = ({ isOpen, onClose, onSubmit, initialValues, formJson }) => {

  return <AdminModal
    title="Equipment Modal"
    isOpen={isOpen}
    onSubmit={onSubmit}
    formJson={formJson}
    onClose={onClose}
    initialValues={initialValues}
  />
};

EquipmentListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  types: PropTypes.array,
  formJson: PropTypes.array.isRequired
};

export default EquipmentListModal;
