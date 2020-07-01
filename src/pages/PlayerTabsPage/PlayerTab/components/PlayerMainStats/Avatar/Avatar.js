import React from 'react';
import avmini from './avmini.jpg';
import { Wrapper } from "./Avatar.style";
const Avatar = () => {
  return <Wrapper>
    <img src={avmini} alt="Girl in a jacket" width="72" height="72" />
  </Wrapper>
};

export default React.memo(Avatar)
