import React from "react";
import SectionHeader from "../../../../../../components/SectionHeader/SectionHeader";
import Select from "../../../../../../components/Select/Select";
import Input from "../../../../../../components/Input/Input";
import PlainButton from "../../../../../../components/PlainButton/PlainButton";
import Text from "../../../../../../components/Text/Text";

const ActionTime = () => {
  return <div>
    <SectionHeader title="Action Time"/>
    <div>
        <Select />
        <Input placeholder="Czas"/>
      <PlainButton>+</PlainButton>
    </div>
    <div>
      <Text>Taniec z gwiazdami</Text>
    </div>
  </div>
};

export default ActionTime;
