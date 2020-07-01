import React from 'react';
import { OrnamentLink } from "./StyledLink.styled";

const StyledLink = ({children, ...props}) => {
  return  <OrnamentLink {...props}>{children}</OrnamentLink>
};
export default StyledLink
