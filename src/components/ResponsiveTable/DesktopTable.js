import React from 'react';
import PropTypes from 'prop-types'
const DesktopTable = ({ list, columns }) => {
  return (
    <table>
      <thead>
      <tr>
        {columns.map((c, index) => {
          return <th key={index}>{c.label}</th>
        })}
      </tr>
      </thead>
      <tbody>
      {list && list.map((element, index) => {
        return <tr key={index}>
          {columns.map((column, indexColumn) => {
            return <td key={indexColumn}>{column.customCell ? <column.customCell data={element} key={indexColumn} /> : element[column.accessor]}</td>
          })}
        </tr>
      })}
      </tbody>
    </table>
  )
};

DesktopTable.displayName = "DesktopTable";
DesktopTable.propTypes = {
  list: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default DesktopTable;
