import React from 'react';
import './sectionHeader.css';

const SectionHeader = ({title}) => {
  return <div className="sectionHeaderContainer">
    <div className="sectionHeaderText">{title}</div>
  </div>
};
export default React.memo(SectionHeader);
