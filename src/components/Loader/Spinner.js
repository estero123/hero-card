import React from 'react'
import Loader from 'react-loader-spinner';
const Spinner = ({ isLoaded, children}) => {
  return isLoaded ? children : <Loader type="TailSpin" color="gray" height={80} width={80} />
};

export default Spinner;
