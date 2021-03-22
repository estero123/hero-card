import React from 'react';
import PropTypes from 'prop-types'
import { Item, List } from "./MobileTable.style";
const MobileTable = ({ list, columns }) => {
  return (
    <List>
      {list && list.map((element, index) => {
        return <Item key={index}>
          {columns.map((column, indexColumn) => {
            return <div key={indexColumn}>{column.label}: {column.customCell ? <column.customCell data={element} key={indexColumn} /> : element[column.accessor]}</div>
          })}
        </Item>
      })}
    </List>
  )
};
MobileTable.displayName = "MobileTable";
MobileTable.propTypes = {
  list: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};
export default MobileTable;
