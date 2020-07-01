const getOptionLabel = (value, options) => {
  const result = options.find(option => option.value === value);
  return result ? result.label : '';
};

export default getOptionLabel;
