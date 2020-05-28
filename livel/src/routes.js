import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from "./services/auth";

import LoginImprovoisado from './Components/Pages/Login/Login/LoginImprovisado'


import TimeSchedule from './Components/Pages/Coachee/TimeSchedule';
import TrainingTypes from './Components/Pages/Coachee/TrainingTypes';
import CountdownTraining from './Components/Pages/Coachee/CountdownTraining';
import Profile from './Components/Pages/Coachee/Profile';
import SignUp from './Components/Pages/Login/SignUp';
import Login from './Components/Pages/Login/Login';
import RequestNumber from './Components/Pages/Login/RequestNumber';
import Rewards from './Components/Pages/Coachee/Rewards'
import Home from './Components/Pages/Login/Home'
import Body from './Components/Pages/Coachee/Body'
import MidTraining from './Components/Pages/Coachee/MidTraining'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
);




export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>

              <Route path="/loginImprovisado" exact component={LoginImprovoisado} />

              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/requestNumber" exact component={RequestNumber} />
              <PrivateRoute path="/trainingTypes" component={TrainingTypes} />
              <PrivateRoute path="/timeSchedule" component={TimeSchedule} />
              <PrivateRoute path="/countdownTraining" component={CountdownTraining} /> 
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/rewards" component={Rewards} />
              <PrivateRoute path="/body" component={Body} />
              {/* <PrivateRoute path="/midTraining" component={MidTraining} /> */}
              {/* <PrivateRoute path="/coach" component={Coach} /> */}

            </Switch>
        </BrowserRouter>
    )
}