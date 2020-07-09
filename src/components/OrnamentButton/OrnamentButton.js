import React from 'react';
import { OrnamentStyledButton, ButtonContentWrapper } from "./OrnamentButton.style";
import { detect } from "detect-browser";

const noop = () => {};
const OrnamentButton = ({children, onClick, disabled = false}) => {

  const browser = detect();
  const isOpera = browser.name === 'opera';

  return <OrnamentStyledButton disabled={disabled} onClick={disabled ? noop : onClick}><ButtonContentWrapper isOpera={isOpera}>{children}</ButtonContentWrapper></OrnamentStyledButton>
};
export default OrnamentButton
