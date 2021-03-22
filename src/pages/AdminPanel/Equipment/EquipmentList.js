import React, { useState } from 'react';
import PropTypes from "prop-types";
import { AddButton } from "../GenderSettingsPage/GenderSettingsPage.style";
import ResponsiveTable from "../../../components/ResponsiveTable/ResponsiveTable";
import EquipmentListModal from "./EquipmentListModal";

const selectStyle = {
  marginBottom: '15px'
};

const RenderTypeOption = (type, key) => {
  const { label, id } = type;
  return <option key={key} value={id}>{label}</option>
};

const defaultFilters = [{ label: 'All', id: 'ALL' }];

const EquipmentList = ({ types, list, methods, formJson, extraColumns, renderTypeFilter = true }) => {
  const typeFilters = defaultFilters.concat(types);
  const [typeFilter, setTypeFilter] = useState({ value: typeFilters[0].id });
  const [initialValues, setInitialValues] = useState({});
  const [isListModalOpen, setListModalOpen] = useState(false);
  const { addItem, updateItem, deleteItem } = methods;

  const typesMap = types.reduce((prev, current) => {
    return {
      ...prev,
      [current.id]: current.label
    };
  }, {});

  const onChangeFilter = React.useCallback((event) => {
    setTypeFilter({ value: event.target.value });
  }, [setTypeFilter]);


  const toggleListModal = () => {
    setInitialValues({});
    setListModalOpen(isOpen => !isOpen)
  };

  const handleAddList = React.useCallback(async item => {
    await addItem(item);
    setInitialValues({});
    setListModalOpen(false);
  }, [addItem]);

  const handleUpdateList = React.useCallback(async item => {
    await updateItem(item);
    setInitialValues({});
    setListModalOpen(false);
  }, [updateItem]);

  const triggerUpdateList = React.useCallback(data => {
    setInitialValues(data);
    setListModalOpen(true);
  }, []);

  const deleteListItem = React.useCallback(async id => {
    await deleteItem(id);
  }, [deleteItem]);


  const ActionsCell = ({ data }) => {
    return <div key={data.id}>
      <button onClick={() => triggerUpdateList(data)}>Edit</button>
      <button onClick={() => deleteListItem(data.id)}>Delete</button>
    </div>
  };

  const TypeCell = ({data}) => {
    return <div key={`${data.id}-types`}>
      {typesMap[data.typeId]}
    </div>
  };

  const basicColumns = [
    {
      label: 'Type',
      accessor: 'typeId',
      customCell: TypeCell
    }
  ];

  const cols = (extraColumns || basicColumns);

  const columns = [
    {
      label: 'ID',
      accessor: 'id'
    },
    {
      label: 'Label',
      accessor: 'label'
    },
    [...cols],
    {
      label: "Actions",
      accessor: '',
      customCell: ActionsCell
    }
  ].flat();

  const filteredList = typeFilter.value !== 'ALL' ? list.filter(i => i.typeId === typeFilter.value) : list;

  const TypeFilterComponent = () => {
    return (
      <label>
      Type:
      <select value={typeFilter.value} onChange={onChangeFilter}>
        {typeFilters.map(RenderTypeOption)}
      </select>
    </label>
    );
  };

  return (
    <>
      <h3>List</h3>
      <AddButton onClick={toggleListModal}>add eq</AddButton>
      {renderTypeFilter && <div style={selectStyle}><TypeFilterComponent /></div>}
      <ResponsiveTable list={filteredList} columns={columns}/>
      <EquipmentListModal formJson={formJson} initialValues={initialValues} types={types} onSubmit={initialValues.id ? handleUpdateList : handleAddList} isOpen={isListModalOpen} onClose={() => setListModalOpen(false)}/>
    </>
  )
};

EquipmentList.displayName = "EquipmentList";
EquipmentList.propTypes = {
  list: PropTypes.array.isRequired,
  types: PropTypes.array.isRequired,
  methods: PropTypes.object,
  formJson: PropTypes.array.isRequired,
  extraColumns: PropTypes.array,
  renderTypeFilter: PropTypes.bool
};

export default EquipmentList
