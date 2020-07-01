import React from 'react';
import { Content, Wrapper } from "./BasicStat.style";
const BasicStat = ({children, contentTop}) => {
  return <Wrapper>
    <Content top={contentTop}>
    {children}
    </Content>
  </Wrapper>
};

export default BasicStat;
