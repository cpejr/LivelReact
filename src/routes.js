import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import Login from "./pages/PublicPages/Login";
import SignUp from "./pages/PublicPages/SignUp";
import ForgetPassword from "./pages/PublicPages/ForgetPassword/index";
import Home from "./pages/PublicPages/Home";
import RequestNumber from "./pages/PublicPages/RequestNumber";
import TimeSchedule from "./pages/Coachee/TimeSchedule";
import TrainingTypes from "./pages/Coachee/TrainingTypes";
import CountdownTraining from "./pages/Coachee/CountdownTraining";
import Coach from "./pages/Coach";
import Profile from "./pages/Coachee/Profile";
import Rewards from "./pages/Coachee/Rewards";
import Body from "./pages/Coachee/Body";
import MidTraining from "./pages/Coachee/MidTraining";
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
