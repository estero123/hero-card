import React from 'react';
import { OrnamentStyledButton, ButtonContentWrapper } from "./OrnamentButton.style";
const noop = () => {};
const OrnamentButton = ({children, onClick, disabled = false}) => {
  return <OrnamentStyledButton disabled={disabled} onClick={disabled ? noop : onClick}><ButtonContentWrapper>{children}</ButtonContentWrapper></OrnamentStyledButton>
};
export default OrnamentButton
