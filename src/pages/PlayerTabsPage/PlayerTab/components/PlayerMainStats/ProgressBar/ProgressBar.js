import React from 'react';
import Text from "../../../../../../components/Text/Text";
import Container from "../../../../../../components/Container/Container";
import { Bar, BarLabel } from "./ProgressBar.style";
const ProgressBar = ({clockTick, playerActionSpeed, actionSpeedProgressBar}) => {
  return <Container alignItems='center'>
    <BarLabel htmlFor="strength" id="barLabel"><Text color='black'>CT: {clockTick}</Text></BarLabel>
    <Bar id="strength" value={actionSpeedProgressBar} max="100"> {clockTick}%</Bar>
  </Container>
};

export default React.memo(ProgressBar)
