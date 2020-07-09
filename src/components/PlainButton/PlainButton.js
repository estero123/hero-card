import React from 'react';

const PlainButton = ({children, onClick, style}) => {
  return <button onClick={onClick} style={style}>{children}</button>
};

export default PlainButton;
