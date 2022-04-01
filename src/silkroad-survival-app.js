import React, { useState } from 'react';
import Header from './components/app/header/Header';
import Footer from './components/app/footer/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Main from './pages/Main'
import SingUp from './pages/SingUp';
import SingIn from './pages/SingIn';
import Download from './pages/Download';
import Reload from './pages/Reload';
import Politics from './pages/Politics';
import EditAccount from './pages/EditAccount';
import MercadoPago from './pages/MercadoPagoPayment';
import { UserContext } from './hooks/UserContext';

export default function SilkroadSurvivalApp (){
    const [userCtx, setUserCtx] = useState({})

    return (
        <UserContext.Provider value={{userCtx, setUserCtx}}>
        <React.Fragment>
            <Router>
            <Header/>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/singUp' component={SingUp} />
                    <Route exact path='/singIn' component={SingIn} />
                    <Route exact path='/reload' component={Reload} />
                    <Route exact path='/download' component={Download} />
                    <Route exact path='/politics' component={Politics} />
                    <Route exact path='/editAccount' component={EditAccount} />
                    <Route exact path='/MercadoPago' component={MercadoPago} />
                </Switch>
            </Router>
            <Footer title="Silkroad Survival" description="Servidor Privado" />
        </React.Fragment>
        </UserContext.Provider>
    );
}

