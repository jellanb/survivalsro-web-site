import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import SingUp from './pages/SingUp';
import SingIn from './pages/SingIn';
import Download from './pages/Download';
import Reload from './pages/Reload';
import Politics from './pages/Politics';
import EditAccount from './pages/EditAccount';
import MercadoPago from './pages/MercadoPagoPayment';
import Stripe from './pages/StripPayment';
import Guides from './pages/Guides';
import { UserContext } from './hooks/UserContext';
import MainLayout from './containers/layouts/MainLayout';

export default function SilkroadSurvivalApp() {
  const [userCtx, setUserCtx] = useState({});

  return (
    <UserContext.Provider value={{ userCtx, setUserCtx }}>
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/singUp" component={SingUp} />
            <Route exact path="/singIn" component={SingIn} />
            <Route exact path="/guides" component={Guides} />
            <Route exact path="/reload" component={Reload} />
            <Route exact path="/download" component={Download} />
            <Route exact path="/politics" component={Politics} />
            <Route exact path="/editAccount" component={EditAccount} />
            <Route exact path="/MercadoPago" component={MercadoPago} />
            <Route exact path="/stripe" component={Stripe} />
          </Switch>
        </MainLayout>
      </Router>
    </UserContext.Provider>
  );
}
