import React from 'react';
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogInForm from "./components/LogInForm";
import Registration from "./components/Registration"
import UserPage from "./components/UserPage";
import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar";

import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
      
        <Switch>
          <Route path="/login">
            <LogInForm />
          </Route>

          <Route path="/register">
            <Registration />
          </Route>


          <Route path="/search">
            <SearchBar />
          </Route>


          <Route path="/:userid">
            <UserPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
