import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from "./services/auth";
import { resultadoRegistra } from "./services/backEnd";


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
// import ForgetPassword from './Components/Pages/Login/ForgetPassword'
import Coach from './Components/Pages/Coach'

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

              <Route path="/testando" exact component={PaginaTeste} /> 

              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/requestNumber" exact component={RequestNumber} />
              {/* <Route path="/forgetpassword" exact component={ForgetPassword} /> */}
              <PrivateRoute path="/midTraining" component={MidTraining} />
              <PrivateRoute path="/trainingTypes" component={TrainingTypes} />
              <PrivateRoute path="/timeSchedule" component={TimeSchedule} />
              <PrivateRoute path="/countdownTraining" component={CountdownTraining} /> 
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/rewards" component={Rewards} />
              <PrivateRoute path="/body" component={Body} />
              <PrivateRoute path="/coach" component={Coach} />

            </Switch>
        </BrowserRouter>
    )
}

function PaginaTeste(){

  useEffect(()=>{
    async function testeBack(){
      try{
        const date = new Date()
        const result =  resultadoRegistra(1, date, 50, 180, 1, 50, 50, 12, 30, 100, 80, 40, 70)
        console.log(result)
      }catch(error){
        alert(error)
      }
    }
    testeBack()
  }, [])

  return (
    <div>Pagina de teste</div>
  )
}