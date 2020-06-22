import React from 'react';
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Route exact path="/">
            <LogInForm />
          </Route>

          <Route path="/register">
            <Registration />
          </Route>

          {/* <PrivateRoute path='/private-route' component={UserPage} /> */}
          <Route path="/:userid">
            <UserPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
