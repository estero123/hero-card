import React from 'react';
import { Content, Wrapper } from "./AdvancedStat.style";
const AdvancedStat = ({ children, scale, contentTop }) => {
  return <Wrapper scale={scale}>
    <Content top={contentTop}>
      {children}
    </Content>
  </Wrapper>
};

export default AdvancedStat;
