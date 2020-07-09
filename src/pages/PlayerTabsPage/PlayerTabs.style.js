import styled from 'styled-components';
import { Tab, TabList, Tabs } from "react-tabs";

import tabBackground from './tabBackground.jpg';

const PlayersList = styled(TabList)`
  margin: 0px;
  padding: 0px;
  border-bottom: 1px solid #683517;
`;

const StyledPlayerTab = styled(Tab)`
  display: inline-block;
  background-color: #f1eedb;
  border-top: 1px solid #683517;
  border-left: 1px solid #683517;
  border-right: 1px solid #683517;
  border-radius: 3px 3px 0px 0px;
  padding: 5px;
  margin: 5px 5px 0px 5px;
  cursor: pointer;
`;

const TabContent = styled.div`
  display: flex;
  align-items: baseline;
`;

const StyledTabs = styled(Tabs)`
    background: url(${tabBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh;
    width: 100%;
`;

export {PlayersList, StyledPlayerTab, StyledTabs, TabContent}
