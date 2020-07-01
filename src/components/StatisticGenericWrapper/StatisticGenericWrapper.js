import React from 'react';
import { setPlayerField } from "../../reducers/playersReducer/playersActions";
import { useDispatch } from "react-redux";

const StatisticGenericWrapper = ({Component, playerId, field, ...props}) => {
  const dispatch = useDispatch();

  const onChange = React.useCallback(event => {
    const data = {
      playerId,
      field,
      value: event.target.value.trim()
    };
    dispatch(setPlayerField(data));
  }, [playerId, field, dispatch]);

  return <Component
    onChange={onChange}
    {...props}
  />
};
export default StatisticGenericWrapper
