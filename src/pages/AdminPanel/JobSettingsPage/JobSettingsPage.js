import React, { useState } from 'react';
import Spinner from "../../../components/Loader/Spinner";
import { AddButton } from "../GenderSettingsPage/GenderSettingsPage.style";
import ResponsiveTable from "../../../components/ResponsiveTable/ResponsiveTable";
import usePlayerJob from "../../../hooks/usePlayerJob";
import PlayerJobModal from "./PlayerJobModal";
import usePlayerType from "../../../hooks/usePlayerType";


const JobSettingsPage = () => {
  const { playerJobList, isLoaded, addPlayerJob, deletePlayerJob, updatePlayerJob } = usePlayerJob();
  const [isPlayerJobModalOpen, setPlayerJobModalOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const { playerTypeList } = usePlayerType();

  const togglePlayerJobModal = () => {
    setInitialValues({});
    setPlayerJobModalOpen(isOpen => !isOpen)
  };

  const handleAddJob = React.useCallback(async job => {
    await addPlayerJob(job);
    setInitialValues({});
    setPlayerJobModalOpen(false);
  }, [addPlayerJob, setPlayerJobModalOpen]);

  const handleUpdateJob = React.useCallback(async job => {
    await updatePlayerJob(job);
    setInitialValues({});
    setPlayerJobModalOpen(false);
  }, [updatePlayerJob, setPlayerJobModalOpen]);

  const triggerUpdateJob = React.useCallback(data => {
    setInitialValues(data);
    setPlayerJobModalOpen(true);
  }, []);

  const ActionsCell = ({ data }) => {
    return <div key={data.id}>
      <button onClick={() => triggerUpdateJob(data)}>Edit</button>
      <button onClick={() => deletePlayerJob(data.id)}>Delete</button>
    </div>
  };

  const MultipliersCell = ({ data }) => {
    const { hp, ma, mp, pa, sp } = data.multipliers;
    return <div key={`${data.id}-multipliers`}>
      HP: {hp}, MA: {ma}, MP: {mp}, PA: {pa}, SP: {sp}
    </div>
  };

  const cCell = ({ data }) => {
    const { hp, ma, mp, pa, sp } = data.c;
    return <div key={`${data.id}-c`}>
      HP: {hp}, MA: {ma}, MP: {mp}, PA: {pa}, SP: {sp}
    </div>
  };

  const AllowedCell = ({ data }) => {
    const { allowedPlayerTypes } = data;
    const nullCheckedTypes = (allowedPlayerTypes || {});
    const filtered = Object.keys(nullCheckedTypes).reduce((previousValue, currentValue) => {
      if (allowedPlayerTypes[currentValue]) {
        const playerTypeName = playerTypeList.find(type => type.id === currentValue);
        if (playerTypeName) {
          return previousValue.concat(playerTypeName.label);
        } else {
          return previousValue.concat(currentValue);
        }
      } else {
        return previousValue;
      }
    }, []);
    const allowed = filtered.join(', ');
    return <div key={`${data.id}-allowed`}>
      {allowed}
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
      label: "Allowed",
      accessor: 'allowedPlayerTypes',
      customCell: AllowedCell
    },
    {
      label: 'Multipliers',
      accessor: 'multipliers',
      customCell: MultipliersCell
    },
    {
      label: 'Move',
      accessor: 'move'
    },
    {
      label: 'CEV',
      accessor: 'cev'
    },
    {
      label: 'C',
      value: 'c',
      customCell: cCell
    },
    {
      label: 'Jump',
      accessor: 'jump'
    },
    {
      label: "Actions",
      accessor: '',
      customCell: ActionsCell
    }
  ];

  return (
    <>
      <h2>Job Settings</h2>
      <Spinner isLoaded={isLoaded}>
        <AddButton onClick={togglePlayerJobModal}>add job</AddButton>
        <ResponsiveTable list={playerJobList} columns={columns}/>
        <PlayerJobModal
          initialValues={initialValues}
          onSubmit={initialValues.id ? handleUpdateJob : handleAddJob}
          isOpen={isPlayerJobModalOpen}
          onClose={() => setPlayerJobModalOpen(false)}
        />
      </Spinner>
    </>
  )
};

export default JobSettingsPage;
