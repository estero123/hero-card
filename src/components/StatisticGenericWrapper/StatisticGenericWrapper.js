import React from 'react';
import { setPlayerField } from "../../reducers/playersReducer/playersActions";
import { useDispatch } from "react-redux";

const StatisticGenericWrapper = ({Component, playerId, field, customOnChange, ...props}) => {
  const dispatch = useDispatch();

  const onChange = React.useCallback(event => {
    const data = {
      playerId,
      field,
      value: typeof event.target.value === 'string' ? event.target.value.trim() : event.target.value
    };
    dispatch(setPlayerField(data));
    customOnChange && customOnChange(data);
  }, [playerId, field, dispatch, customOnChange]);

  return <Component
    onChange={onChange}
    {...props}
  />
};
export default React.memo(StatisticGenericWrapper);
