import React from 'react';
import Button from "../../../../../../components/Button/Button";
import './ctActionButtons.css';
const CtActionButtons = () => {

  return <div id="ctActionButtonsWrapper">
    <div>
    <Button>-60 CT</Button>
    <Button>-80 CT</Button>
    <Button>-100 CT</Button>
    </div>
    <div id="bigButtonWrapper">
    <Button width="calc(100% - 6px)">Custom value</Button>
    </div>
  </div>
};
export default React.memo(CtActionButtons);
