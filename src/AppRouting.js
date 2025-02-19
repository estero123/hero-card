import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import PlayerTabsPage from "./pages/PlayerTabsPage/PlayerTabsPage";
import PlayerSetupPage from "./pages/PlayerSetupPage/PlayerSetupPage";
import AdminPanel from "./pages/AdminPanel/AdminPanel";

const AppRouting = () => {

  return <Router>
    <main>
      <Switch>
        <Route exact path="/"><StartPage  /></Route>
        <Route exact path="/setup"><PlayerSetupPage  /></Route>
        <Route path="/admin"><AdminPage /></Route>
        <Route path="/admin-panel"><AdminPanel /></Route>
        <Route path="/player-tabs"><PlayerTabsPage /></Route>
      </Switch>
    </main>
  </Router>
};

export default React.memo(AppRouting);
