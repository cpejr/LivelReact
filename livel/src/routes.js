import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


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



export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                { <Route path="/" exact component={Home} /> }
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/requestNumber" exact component={RequestNumber} />
                <Route path="/trainingTypes" component={TrainingTypes} />
                {/* <Route path="/midTraining" component={MidTraining} /> */}
                <Route path="/timeSchedule" component={TimeSchedule} />
                <Route path="/countdownTraining" component={CountdownTraining} /> 
                <Route path="/profile" component={Profile} />

                { <Route path="/rewards" component={Rewards} /> }
                <Route path="/body" component={Body} />

                {/* <Route path="/coach" component={Coach} /> */}
            </Switch>
        </BrowserRouter>
    )
}