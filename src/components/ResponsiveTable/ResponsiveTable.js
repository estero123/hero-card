import React from 'react';
import MobileTable from "./MobileTable/MobileTable";
import DesktopTable from "./DesktopTable";
import useResponsive from "../../hooks/useResponsive";

const ResponsiveTable = ({ list, columns }) => {
  const { isMobile } = useResponsive();
  return isMobile ? <MobileTable list={list} columns={columns} /> : <DesktopTable list={list} columns={columns} />
};

export default ResponsiveTable
