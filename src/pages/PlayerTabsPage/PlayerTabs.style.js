import styled from 'styled-components';
import { Tab, TabList, Tabs } from "react-tabs";

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
`;

export {PlayersList, StyledPlayerTab, StyledTabs, TabContent}
