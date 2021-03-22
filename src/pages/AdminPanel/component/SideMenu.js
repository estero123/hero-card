import React from 'react';
import SideList from "../../../components/SideList/SideList";

const menu = [
  {
    title: "Various",
    children: [
      {
        title: "Gender",
        url: '/admin-panel/various/gender-settings'
      },
      {
        title: "Player type",
        url: '/admin-panel/various/player-type-settings',
      },
      {
        title: "Job",
        url: '/admin-panel/various/job-settings'
      },
      {
        title: "Race",
        url: '/admin-panel/various/race-settings',
      },
      {
        title: "Zodiac sign",
        url: '/admin-panel/various/zodiac-sign-settings'
      }
    ]
  },
  {
    title: "Equipment",
    children: [
      {
        title: "Weapon",
        url: '/admin-panel/equipment/weapon-settings',
      },
      {
        title: "Shield",
        url: '/admin-panel/equipment/shield-settings'
      },
      {
        title: "Head",
        url: '/admin-panel/equipment/head-settings'
      },
      {
        title: "Body",
        url: '/admin-panel/equipment/body-settings'
      },
      {
        title: 'Accessory',
        url: '/admin-panel/equipment/accessory-settings'
      }
    ]
  },
];

const SideMenu = () => {
  return (
    <aside>
      <SideList menuJson={menu}/>
    </aside>
  )
};
export default SideMenu
