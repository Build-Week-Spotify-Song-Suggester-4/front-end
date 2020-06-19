import React from 'react';
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import LogInForm from "./components/LogInForm";
import Registration from "./components/Registration"
import UserPage from "./components/UserPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      </header>
        <Switch>
          <Route path="/login">
            <LogInForm />
          </Route>

          <Route path="/register">
            <Registration />
          </Route>

          <Route path="/:userid">
            <UserPage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
