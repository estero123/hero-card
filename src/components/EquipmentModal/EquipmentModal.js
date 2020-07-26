import React from 'react';
import Modal from "../Modal/Modal";
import Weapon from "./Weapon";
import { Wrapper } from "./EquipmentModal.style";
import Shield from "./Shield";
import Accessory from "./Accessory";
import StandardEquipment from "./StandardEquipment";

const EquipmentModal = ({ isOpen, onClose, title, equipment, playerId} ) => {
  return <Modal isOpen={isOpen} onClose={onClose} title={title}>
    <Wrapper>
    <Weapon label='Weapon 1' field='firstWeapon' weapon={equipment.firstWeapon} playerId={playerId}/>
    <Weapon label='Weapon 2' field='secondWeapon' weapon={equipment.secondWeapon} playerId={playerId}/>
    <Shield label='Shield 1' field='firstShield' shield={equipment.firstShield} playerId={playerId}/>
    <Shield label='Shield 2' field='secondShield' shield={equipment.secondShield} playerId={playerId}/>
    <StandardEquipment label='Head' field='head' item={equipment.head} playerId={playerId}/>
    <StandardEquipment label='Body' field='body' item={equipment.body} playerId={playerId}/>
    <Accessory label='Accessory' accessory={equipment.accessory} playerId={playerId}/>
    </Wrapper>
  </Modal>
};

export default React.memo(EquipmentModal);
