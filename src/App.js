import React from 'react';
import { BrowserRouter as Route, Switch } from "react-router-dom";
import LogInForm from "./components/LogInForm";
import Registration from "./components/Registration"
import UserPage from "./components/UserPage";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
        <Switch>
          <Route path="/login">
            <LogInForm />
          </Route>

          <Route path="/register">
            <Registration />
          </Route>

          <Route path="/:userid">
            <UserPage/>
          </Route>

          <Route path="/">
            <SearchBar />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
