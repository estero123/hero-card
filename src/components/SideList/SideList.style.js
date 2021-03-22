import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";

const ListItem = styled(Link)`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  height: 50px;
  padding-left: 10px;
  border-bottom: 1px solid gray;
  ${props => props.disabled && css`
    opacity: 0.65;
    pointer-events: none;
  `}
  :last-child { border-bottom: none; }
  :hover { 
    background-color: ${props => props.disabled ? 'inherit' : '#E0E0E0'};
    cursor: pointer;
  }
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const SectionName = styled.h3`
  margin: 0 0 5px 0;
  padding-left: 8px;
`;

const MenuWrapper = styled.div`
  margin-top: 5px;
  :first-child { margin-top: 0; }
`;
export { List, ListItem, SectionName, MenuWrapper }
