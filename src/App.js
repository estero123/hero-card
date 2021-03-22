import React from 'react';
import AppRouting from "./AppRouting";
import { Provider } from "react-redux";
import store from "./store/store";
import BroadcastListener from "./BroadcastListener/BroadcastListener";
import './App.css';

function App() {

  return <Provider store={store}>
    <BroadcastListener />
    <AppRouting />
  </Provider>;
}

export default App;
