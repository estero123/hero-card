import styled from 'styled-components';
import avatarBg from './avatarBg.png';

const Wrapper = styled.div`
    background-image: url(${avatarBg});
    background-size: cover;
    background-repeat:   no-repeat;
    background-position: center center;
    width: ${props => (props.scale || 1) * 158}px;
    height: ${props => (props.scale || 1) * 173}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export {
  Wrapper
}
