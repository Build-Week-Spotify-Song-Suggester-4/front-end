import React from 'react';
import { Route, Switch } from "react-router-dom";
import LogInForm from "./components/LogInForm";
import Registration from "./components/Registration"
import UserPage from "./components/UserPage";
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteEdit from './components/PrivateRouteEdit';
import EditUser from './components/EditUser';
import NavBar from './components/NavBar';
import SearchBar from "./components/SearchBar";

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
        <Switch>

          <Route exact path="/" component={SearchBar}/>

          <Route path="/login" render={props => <LogInForm {...props}/>} />

          <Route path="/register" render={props => <Registration  {...props}/>} />

          <PrivateRouteEdit path='/edit-user' component={EditUser}/>

          <PrivateRoute path='/private-route' component={UserPage} />
          
        </Switch>
    </div>
  );
}

export default App;
