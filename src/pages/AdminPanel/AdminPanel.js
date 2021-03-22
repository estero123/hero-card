import React from 'react';
import { useRouteMatch, Route, Switch } from "react-router-dom";
import SideMenu from "./component/SideMenu";
import GenderSettingsPage from "./GenderSettingsPage/GenderSettingsPage";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import PlayerTypeSettingsPage from './PlayerTypeSettingsPage/PlayerTypeSettingsPage';
import { Content, MenuWrapper, Section } from "./AdminPanel.style";
import useResponsive from "../../hooks/useResponsive";
import JobSettingsPage from "./JobSettingsPage/JobSettingsPage";
import RaceSettingsPage from "./RaceSettingsPage/RaceSettingsPage";
import WeaponSettingsPage from "./WeaponSettingsPage/WeaponSettingsPage";
import ShieldSettingsPage from "./ShieldSettingsPage/ShieldSettingsPage";
import HeadSettingsPage from "./HeadSettingsPage/HeadSettingsPage";
import BodySettingsPage from "./BodySettingsPage/BodySettingsPage";
import AccessorySettingsPage from "./AccessorySettingsPage/AccessorySettingsPage";
import ZodiacSignSettingsPage from './ZodiacSignSettingsPage/ZodiacSignSettingsPage';

const AdminPanel = () => {
  const { url } = useRouteMatch();
  const { isMobile } = useResponsive();
  return (
    <PageWrapper>
      <h1>HeroCard - Admin Panel</h1>
      <Section isMobile={isMobile}>
        <MenuWrapper isMobile={isMobile}>
          <SideMenu/>
        </MenuWrapper>
        <Content isMobile={isMobile}>
          <Switch>
            {/*VARIOUS*/}
            <Route path={`${url}/various/gender-settings`}><GenderSettingsPage/></Route>
            <Route path={`${url}/various/player-type-settings`}><PlayerTypeSettingsPage /></Route>
            <Route path={`${url}/various/job-settings`}><JobSettingsPage /></Route>
            <Route path={`${url}/various/race-settings`}><RaceSettingsPage /></Route>
            <Route path={`${url}/various/zodiac-sign-settings`}><ZodiacSignSettingsPage /></Route>

            {/*EQUIPMENT*/}
            <Route path={`${url}/equipment/weapon-settings`}><WeaponSettingsPage/></Route>
            <Route path={`${url}/equipment/shield-settings`}><ShieldSettingsPage/></Route>
            <Route path={`${url}/equipment/head-settings`}><HeadSettingsPage/></Route>
            <Route path={`${url}/equipment/body-settings`}><BodySettingsPage/></Route>
            <Route path={`${url}/equipment/accessory-settings`}><AccessorySettingsPage/></Route>
          </Switch>
        </Content>
      </Section>
    </PageWrapper>
  )
};
export default AdminPanel
