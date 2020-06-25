import React from 'react';
import { Route, Switch } from "react-router-dom";
import LogInForm from "./components/LogInForm";
import Registration from "./components/Registration"
import UserPage from "./components/UserPage";
import PrivateRoute from './components/PrivateRoute'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      </header>
        <Switch>
          <Route exact path="/login" render={props => <LogInForm {...props}/>} />

          <Route path="/register" render={props => <Registration  {...props}/>} />

          <PrivateRoute path='/private-route' component={UserPage} />
          
        </Switch>
    </div>
  );
}

export default App;
