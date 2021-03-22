import React, { useState } from 'react';
import usePlayerRace from "../../../hooks/usePlayerRace";
import Spinner from "../../../components/Loader/Spinner";
import { AddButton } from "../GenderSettingsPage/GenderSettingsPage.style";
import ResponsiveTable from "../../../components/ResponsiveTable/ResponsiveTable";
import PlayerRaceModal from "./PlayerRaceModal";

const RaceSettingsPage = () => {
  const { playerRaceList, isLoaded, addPlayerRace, deletePlayerRace, updatePlayerRace } = usePlayerRace();
  const [isPlayerRaceModalOpen, setPlayerRaceModalOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({});

  const togglePlayerRaceModal = () => {
    setInitialValues({});
    setPlayerRaceModalOpen(isOpen => !isOpen)
  };

  const handleAddRace = React.useCallback(async job => {
    await addPlayerRace(job);
    setInitialValues({});
    setPlayerRaceModalOpen(false);
  }, [addPlayerRace, setPlayerRaceModalOpen]);

  const handleUpdateRace = React.useCallback(async job => {
    await updatePlayerRace(job);
    setInitialValues({});
    setPlayerRaceModalOpen(false);
  }, [updatePlayerRace, setPlayerRaceModalOpen]);

  const triggerUpdateRace = React.useCallback(data => {
    setInitialValues(data);
    setPlayerRaceModalOpen(true);
  }, []);

  const ActionsCell = ({data}) => {
    return <div key={data.id}>
      <button onClick={() => triggerUpdateRace(data)}>Edit</button>
      <button onClick={() => deletePlayerRace(data.id)}>Delete</button>
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
      label: "Actions/Raw Stats",
      accessor: '',
      customCell: ActionsCell
    }
  ];


  return (
    <>
      <h2>Race Settings</h2>
      <Spinner isLoaded={isLoaded}>
        <AddButton onClick={togglePlayerRaceModal}>add race</AddButton>
        <ResponsiveTable list={playerRaceList} columns={columns}/>
        <PlayerRaceModal initialValues={initialValues} onSubmit={initialValues.id ? handleUpdateRace : handleAddRace} isOpen={isPlayerRaceModalOpen} onClose={() => setPlayerRaceModalOpen(false)}/>
      </Spinner>
    </>
  )
};

export default RaceSettingsPage
