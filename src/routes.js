import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import TimeSchedule from "./pages/Coachee/TimeSchedule";
import TrainingTypes from "./pages/Coachee/TrainingTypes";
import CountdownTraining from "./pages/Coachee/CountdownTraining";
import Profile from "./pages/Coachee/Profile";
import SignUp from "./pages/Login/SignUp";
import Login from "./pages/Login/Login";
import RequestNumber from "./pages/Login/RequestNumber";
import Rewards from "./pages/Coachee/Rewards";
import Home from "./pages/Login/Home";
import Body from "./pages/Coachee/Body";
import MidTraining from "./pages/Coachee/MidTraining";
import ForgetPassword from "./pages/Login/ForgetPassword/index";
import Coach from "./pages/Coach";
import CoachProfile from "./pages/Coach/CoachProfile/index";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/requestNumber" exact component={RequestNumber} />
        <Route path="/forgetpassword" exact component={ForgetPassword} />
        <PrivateRoute path="/midTraining" component={MidTraining} />
        <PrivateRoute path="/trainingTypes" component={TrainingTypes} />
        <PrivateRoute path="/timeSchedule" component={TimeSchedule} />
        <PrivateRoute path="/countdownTraining" component={CountdownTraining} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/rewards" component={Rewards} />
        <PrivateRoute path="/body" component={Body} />
        <PrivateRoute path="/coach" component={Coach} />
        <PrivateRoute path="/coachprofile" component={CoachProfile} />
      </Switch>
    </BrowserRouter>
  );
}
