import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom"
import {Container, Jumbotron, Row, Col, Button, Form, FormGroup, Label, Input} from "reactstrap";

import axiosWithAuth from '../util/axiosWithAuth';
// import {  } from '../actions/index'

function LogInForm(){

	const [ login, setLogin ] = useState({
		username: '',
		password: ''
	})

	const push  = useHistory()

	useEffect(() => {
		axiosWithAuth()
		.get("https://spotify-lambda.herokuapp.com/")
		.then(res => console.log(res))
		.catch(err => err)
	})

	const submitLogin = e => {
		e.preventDefault();
		axiosWithAuth()
//************************NEED API ADDRESS HERE*************************************
		.post("/login", login)
		.then(res => {
			localStorage.setItem("token", res.data.payload);
			push("/private-route")})
		.catch(err => console.log(err.message, err.response))
	}


	const changeHandler = e => {
		setLogin({
			...login,
			[e.target.name]: e.target.value 
		})
	}

	return(
		<Container>
			<Jumbotron>
					<Form onSubmit={submitLogin}>
						<h1>Log In: </h1>
						<Row>
							<Col sm={{ size: 6, offset: 3 }}>
								<FormGroup>
									<Label for="username" />
									<Input type="username" name="username" value={login.username} onChange={changeHandler} id="email" placeholder="User Name" />
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col sm={{ size: 6, offset: 3 }}>
								<FormGroup>
									<Label for="password" />
									<Input type="password" name="password" value={login.password} onChange={changeHandler} id="password" placeholder="Password" />
								</FormGroup>
							</Col>
						</Row>
						<Col sm="12">
							<Button type="submit">Log In</Button>
						</Col>
					</Form>
			</Jumbotron>
		</Container>
	);
}

export default LogInForm;