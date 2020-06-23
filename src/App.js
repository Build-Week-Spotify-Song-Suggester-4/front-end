import React, { useEffect } from 'react';
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import LogInForm from "./components/LogInForm";
import Registration from "./components/Registration"
import UserPage from "./components/UserPage";
import PrivateRoute from './components/PrivateRoute'
import axios from 'axios'
import './App.css';


function App() {

  useEffect(()=> {
    axios
    .get("https://spotify-song-suggester-backend.vercel.app/")
    .then(res => console.log(res.data))
    .catch(err =>err)
  })
  return (
    <div className="App">
      <header>
      </header>
        <Switch>
        <Route exact path="/" render={props => <LogInForm {...props}/>} />

        <Route path="/register" render={props => <Registration  {...props}/>} />

        <PrivateRoute path='/private-route' component={UserPage} />
      
        </Switch>
    </div>
  );
}

export default App;
