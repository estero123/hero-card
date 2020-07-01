import React from 'react';
import { StyledContainer } from "./Container.style";

const Container = ({ children, variant = 'row', alignItems, width, height, justifyContent, noWrap = false }) => {
  return <StyledContainer variant={variant} alignItems={alignItems} width={width}
                          height={height} justifyContent={justifyContent} noWrap={noWrap}>{children}</StyledContainer>
};
export default Container
