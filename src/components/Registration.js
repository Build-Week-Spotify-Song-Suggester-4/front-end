import React, { useState } from "react";
import {Container, Jumbotron, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as yup from "yup";
import ModalGroup from "./ModalGroup";

function Registration (props){
	const [user, setUser] = useState({
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		email: "",
		terms: false
	});

	const [errors, setErrors] = useState({
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		email: "",
		terms: ""
	});

	const schema = yup.object().shape({
		username: yup.string().min(2).required("username is required"),
		password: yup.string().min(2).required("password is required"),
		firstName: yup.string().min(2).required("first name is required"),
		lastName: yup.string().min(2).required("last name is required"),
		email: yup.string().email("please enter a valid email").required("email is required"),
		terms: yup.boolean().oneOf([true])
	});

	const validateChange = event => {
		yup.reach(schema, event.target.name).validate(event.target.value).then(isValid => {
			setErrors({
				...errors,
				[event.target.name]: ""
			})
		}).catch(err =>{
			setErrors({
				...errors, [event.target.name]: err.errors[0]
				})
			})	
	};

	

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const acceptBtn = () => {
		toggle();
		setUser({
			...user,
			terms: true
		});
	}

	const submitHandler = (event) => {
		event.preventDefault();
		setUser({
			username: "",
			password: "",
			firstName: "",
			lastName: "",
			email: "",
			terms: false
		});
	};

	const changeHandler = (event) => {
		event.persist();
		validateChange(event);

		setUser({
			...user,
			[event.target.name]: event.target.name === "terms" ? event.target.checked : event.target.value
		});
	};

	return(
		<Container>
			<Jumbotron>
					<Form onSubmit={submitHandler}>
						<h1>Register: </h1>
						<Row>
							<Col sm="6">
								<FormGroup>
									<Label for="username" />
									<Input type="username" name="username" id="username" placeholder="username" value={user.username} onChange={changeHandler} />
									{errors.username.length > 0 ? <p className="error">{errors.username}</p> : null}
								</FormGroup>
							</Col>

							<Col sm="6">
								<FormGroup>
									<Label for="password" />
									<Input type="password" name="password" id="password" placeholder="password" value={user.password} onChange={changeHandler} />
									{errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col sm="6">
								<FormGroup>
									<Label for="firstName" />
									<Input type="text" name="firstName" id="firstName" placeholder="first name" value={user.firstName} onChange={changeHandler} />
									{errors.firstName.length > 0 ? <p className="error">{errors.firstName}</p> : null}
								</FormGroup>
							</Col>
							<Col sm="6">
								<FormGroup>
									<Label for="lastName" />
									<Input type="text" name="lastName" id="lastName" placeholder="last name" value={user.lastName} onChange={changeHandler} />
									{errors.lastName.length > 0 ? <p className="error">{errors.lastName}</p> : null}
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col sm={{ size: 8, offset: 2 }}>
								<FormGroup>
									<Label for="email" />
									<Input type="email" name="email" id="email" placeholder="email" value={user.email} onChange={changeHandler} />
									{errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
								</FormGroup>
							</Col>
						</Row>
							<Col sm="12">
								<FormGroup>
									<Input type="checkbox" name="terms" checked={user.terms} onChange={changeHandler} />
									<span onClick={toggle}>Terms and Conditions</span>
									<ModalGroup modal={modal} toggle={toggle} acceptBtn={acceptBtn} />
									{errors.terms.length > 0 ? <p className="error">{errors.terms}</p> : null}
								</FormGroup>
							</Col>

							<Col sm="12">
								<Button type="submit">Log In</Button>
							</Col>
					</Form>
			</Jumbotron>
		</Container>
	);
}

export default Registration;