import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { Field } from "react-final-form";

const getLabel = (option, settings) => {
  const { label: basicLabel } = option;
  const label = (settings && settings.optionLabelFieldName && option[settings.optionLabelFieldName]) || basicLabel;
  return label;
};

const getValue = (option, settings) => {
  const { id: basicValue } = option;
  const value =((settings && settings.optionValueFieldName && option[settings.optionValueFieldName]) || basicValue);
  return value;
};

const RenderOption = ({option, settings}) => {
  const label = getLabel(option, settings);
  const value = getValue(option, settings);
  return <option value={value}>{label}</option>
};

const Select = ({ input, options, settings, meta, firstSelectedByDefault = true, ...props }) => {

  useEffect(() => {
    if (firstSelectedByDefault && input.value === '') {
      const value = getValue(options[0], settings);
      input.onChange(value);
    }
  }, [firstSelectedByDefault, input, options, settings]);

  return (
    <label>
      {input.label}
      <Field {...input} component="select" {...props}>
        {(options || []).map((option, key) => <RenderOption option={option} key={key} settings={settings} />)}
      </Field>
    </label>
  )
};

Select.displayName = 'Select';
Select.propTypes = {
  input: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  settings: PropTypes.shape({
    optionLabelFieldName: PropTypes.string,
    optionValueFieldName: PropTypes.string
  }),
  firstSelectedByDefault: PropTypes.bool
};

export default Select;
