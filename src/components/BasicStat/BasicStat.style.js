import styled from 'styled-components';

import basicStatBg from './basicStatBg.png';

const Wrapper = styled.div`
    background: url(${basicStatBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: ${props => (props.scale || 1) * 200}px;
    height: ${props => (props.scale || 1) * 120}px;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    position: relative;
    top: ${props => props.top || '40px'};
`;

export {
  Wrapper,
  Content
}
