import React from 'react';
import { Paragraph, TextWrapper } from "./Text.style";

const Text = ({ children, margin, variant, color }) => {

  return <TextWrapper margin={margin}><Paragraph variant={variant} color={color}>{children}</Paragraph></TextWrapper>
};

export default Text;
