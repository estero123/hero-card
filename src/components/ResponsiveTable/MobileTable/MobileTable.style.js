import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  margin-bottom: 10px;
  :last-child { margin-bottom: 0; }
  :nth-child(odd) { background: #E0E0E0; }
`;

export { List, Item }
