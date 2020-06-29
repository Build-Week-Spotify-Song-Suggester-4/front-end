import React, { useState } from "react";

import {Container, Jumbotron, Row, Col, Button, Form, FormGroup, Label, Input} from "reactstrap";

import axiosWithAuth from '../util/axiosWithAuth';
import { connect } from 'react-redux'
import { userCreds } from '../actions/index'

function LogInForm({ userCreds, history }){

	const [ login, setLogin ] = useState({
		email: "",
		password: "" 
	})

	const submitLogin = e => {
		e.preventDefault();
		axiosWithAuth()
		.post("/auth/login", login)
		.then(res => {
			userCreds(res.data)
			localStorage.setItem("token", res.data.token);
			localStorage.setItem("ID", res.data.user.id)
			history.push("/private-route")
			}
		)
		.catch(err => alert(err.message, err.response))
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
									<Input type="email" name="email" value={login.email} onChange={changeHandler} id="email" placeholder="Email" />
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
						<Row>
							<Col sm="6">
								<Button type="submit">Log In</Button>
							</Col>
							<Col sm="6">
							<Button type="button" onClick={()=>{
                                    history.push('/register')}
                                    } >Create An Account!</Button>
							</Col>
						</Row>
					</Form>
			</Jumbotron>
		</Container>
	);
}

const mapStateToProps = state => {
    return {
		email: state.email,
		password: state.password
	}
}

export default connect (
    mapStateToProps,
	{ userCreds }
) ( LogInForm);