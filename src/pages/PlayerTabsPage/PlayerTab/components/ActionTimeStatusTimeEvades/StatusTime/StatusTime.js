import React from 'react';
import './statusTime.css';
import SectionHeader from "../../../../../../components/SectionHeader/SectionHeader";
import Input from "../../../../../../components/Input/Input";
import PlainButton from "../../../../../../components/PlainButton/PlainButton";
import Table from "../../../../../../components/Table/Table";
import { Container } from "./StatusTime.style";

const tableContent = [
  {
    statusName: 'Status Name 1',
    timeLeft: 3
  },
  {
    statusName: 'Status Name 2',
    timeLeft: 5
  },
  {
    statusName: 'Status Name 3',
    timeLeft: 15
  }
];

const columns = [
  {
  label: 'Name',
  accessor: 'statusName'
  },
  {
    label: 'Time',
    accessor: 'timeLeft'
  }
];

const StatusTime = () => {

  return <div id="statusTimeWrapper">
    <Container>
    <div id="headerWrapper">
      <SectionHeader title="Status Time" />
    </div>
    <div style={{display: 'flex'}}>
      <Input height='15px' width='75%' margin='0px 0px 0px 0px' placeholder="Status name" />
      <Input height='15px' width='20%' placeholder="Time" />
      <PlainButton>+</PlainButton>
    </div>
    <div style={{width: 'calc(100%'}}>
      <Table list={tableContent} columns={columns}/>
    </div>
    <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Input height='15px' width='calc(100%)' placeholder="Calculator" />
      <PlainButton>></PlainButton>
    </div>
    </Container>
  </div>
};

export default StatusTime;
