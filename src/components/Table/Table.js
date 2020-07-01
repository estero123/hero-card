import React from 'react';
import './table.css';
const Table = ({ list, columns }) => {
  return <table>
    <thead>
    <tr>
      {columns.map((c, index) => {
        return <th key={index}>{c.label}</th>
      })}
    </tr>
    </thead>
    <tbody>
    {list.map((element, index) => {
      return <tr key={index}>
        {columns.map((column, indexColumn) => {
          return <td key={indexColumn}>{element[column.accessor]}</td>
        })}
      </tr>
    })}

    </tbody>
  </table>
};
export default Table;
