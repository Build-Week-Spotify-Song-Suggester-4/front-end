import React, { useState } from "react";
import {Container, Jumbotron, Row, Col, Button, Form, FormGroup, Label, Input} from "reactstrap";

function LogInForm(){
	const [user, setUser] = useState({
		email: "",
		password: ""
	});

	const changeHandler = (event) => {
		setUser({
			...user,
			[event.target.name]: event.target.value
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();
		setUser({
			email: "",
			password: ""
		});
	};

	return(
		<Container>
			<Jumbotron>
					<Form onSubmit={submitHandler}>
						<h1>Log In: </h1>
						<Row>
							<Col sm={{ size: 6, offset: 3 }}>
								<FormGroup>
									<Label for="email" />
									<Input type="email" name="email" id="email" placeholder="email" value={user.email} onChange={changeHandler} />
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col sm={{ size: 6, offset: 3 }}>
								<FormGroup>
									<Label for="password" />
									<Input type="password" name="password" id="password" placeholder="password" value={user.password} onChange={changeHandler} />
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