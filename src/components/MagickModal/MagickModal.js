import React from 'react';
import Modal from "../Modal/Modal";
import { Wrapper } from "./MagickModal.style";
import { useSelector } from "react-redux";
import PlayerMagickRow from "./PlayerMagickRow/PlayerMagickRow";

const MagickModal = ({ isOpen, onClose, title }) => {

  const players = useSelector(state => state.players).players || [];

  return <Modal isOpen={isOpen} onClose={onClose} title={title}>
    <Wrapper>
      {Object.keys(players).map((key, index) => <PlayerMagickRow key={index} playerName={players[key].playerName} />)}
    </Wrapper>
  </Modal>
};

export default MagickModal;
