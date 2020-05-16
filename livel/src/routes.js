import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/requestNumber" exact component={RequestNumber} />
                
                <Route path="/trainingTypes" component={TrainingTypes} />
                <Route path="/midTraining" component={MidTraining} />
                <Route path="/timeSchedule" component={Produto} />
                <Route path="/countdownTraining" component={CountdownTraning} />
                <Route path="/profile" component={Profile} />
                <Route path="/rewards" component={Rewards} />
                <Route path="/body" component={Body} />

                <Route path="/coach" component={Coach} />
            </Switch>
        </BrowserRouter>
    )
}