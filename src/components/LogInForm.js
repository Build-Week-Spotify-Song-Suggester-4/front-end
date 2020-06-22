import React, { useState, useEffect} from "react";
import {Container, Jumbotron, Row, Col, Button, Form, FormGroup, Label, Input} from "reactstrap";

function LogInForm(){
	const [ login, setLogin ] = useState({
		email: '',
		password: ''
	})

	useEffect(() => {
		console.log(login)
	})

	const submitLogin = e => {
		e.preventDefault();
// 		axiosWithAuth()
// //************************NEED API ADDRESS HERE*************************************
// 		.post("", login)
// 		.then(res => res)
// 		.catch(err => console.log(err.message, err.response))
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
									<Label for="email" />
									<Input type="email" name="email" id="email" placeholder="email" value={login.email} onChange={changeHandler} />
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col sm={{ size: 6, offset: 3 }}>
								<FormGroup>
									<Label for="password" />
									<Input type="password" name="password" id="password" placeholder="password" value={login.password} onChange={changeHandler} />
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