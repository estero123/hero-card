import React from 'react';

const PlainButton = ({children, onClick}) => {
  return <button onClick={onClick}>{children}</button>
};

export default PlainButton;
