import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, MenuWrapper, SectionName } from "./SideList.style";

const MenuItem = (item, key) => {
  const { title, url, isDisabled } = item;
  return <ListItem key={key} to={url} disabled={isDisabled}>{title}</ListItem>
};

const Menu = (item, key) => {
  const { title, children } = item;
  return (
    <MenuWrapper key={key}>
      <SectionName>{title}</SectionName>
      <List>{children.map(MenuItem)}</List>
    </MenuWrapper>
  )
};

/**
 *
 * @param menuJson
 * @returns {*}
 * @constructor
 */

const SideList = ({ menuJson }) => {
  return Array.isArray(menuJson) && menuJson.map(Menu)
};

SideList.displayName = "SideList";
SideList.propTypes = {
  menuJson: PropTypes.array.isRequired
};

export default SideList;
