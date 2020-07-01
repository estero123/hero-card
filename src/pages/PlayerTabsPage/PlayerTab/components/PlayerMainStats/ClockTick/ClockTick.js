import React from 'react';
import Text from "../../../../../../components/Text/Text";

const ClickTick = ({clockTick}) => {
  return <Text>ClockTick: {clockTick}</Text>
};
export default React.memo(ClickTick);
