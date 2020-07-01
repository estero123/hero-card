import styled from 'styled-components';
import advancedStatBg from './advancedStatBg.png';

const Wrapper = styled.div`
    background: url(${advancedStatBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    justify-content: center;
    width: ${props => (props.scale || 1) * 404}px;
    height: ${props => (props.scale || 1) * 85}px;
`;

const Content = styled.div`
    position: relative;
    top: ${props => props.top || '20px'};
`;

export { Wrapper, Content }
