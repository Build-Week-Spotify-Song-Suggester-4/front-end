import React from 'react';
import { Container } from "reactstrap";
import { Route } from "react-router-dom";
import LogInForm from "./components/LogInForm";
import Registration from "./components/Registration"
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      </header>

      <Container>
        <Route path="/login">
          <LogInForm />
        </Route>

        <Route path="/register">
          <Registration />
        </Route>

        <Route path="/:userid">

        </Route>
      </Container>

    </div>
  );
}

export default App;
