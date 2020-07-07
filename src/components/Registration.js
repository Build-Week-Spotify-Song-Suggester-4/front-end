import React, { useState } from "react";
import { Container, Jumbotron, Row, Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from 'react-redux';
import { submitHandler } from '../actions/index'
import { useHistory } from "react-router-dom"
import axiosWithAuth from "../util/axiosWithAuth";
import * as yup from "yup";
// import ModalGroup from "./ModalGroup";

function Registration (){
	const [user, setUser] = useState({
		email: "",
		password: "",
		first_name: "",
		last_name: "",
		terms: false,
	});

	console.log(user)

	const [errors, setErrors] = useState({
		username: "",
		password: "",
		first_name: "",
		last_name: "",
		email: "",
		terms: ""
	});

	const schema = yup.object().shape({
		username: yup.string().min(2).required("username is required"),
		password: yup.string().min(2).required("password is required"),
		first_name: yup.string().min(2).required("first name is required"),
		last_name: yup.string().min(2).required("last name is required"),
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

	const history = useHistory()

	const onSubmit = (e) => {
		e.preventDefault();
		if(user.terms){
			axiosWithAuth()
			.post("/auth/register", user )
			.then(res => {
				console.log(res);
				localStorage.setItem("token", res.data.token);
				localStorage.setItem("ID", res.data.user.id);
				history.push("/private-route")
				// window.location.reload(true)
			})
			.catch(err => alert("Error Registering. Please Try Again", err.message, err.response));
		} else{alert("Please agree to Terms and Conditions to continue!")}	
	}

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
					<Form onSubmit={onSubmit}>
						<h1>Register: </h1>
						<Row>
							<Col sm="6">
								<FormGroup>
									<Label for="email" />
									<Input type="email" name="email" id="email" placeholder="email" value={user.email} onChange={changeHandler} />
									{errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
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
									<Input type="text" name="first_name" id="first_name" placeholder="First Name" value={user.first_name} onChange={changeHandler} />
									{errors.first_name.length > 0 ? <p className="error">{errors.first_name}</p> : null}
								</FormGroup>
							</Col>
							<Col sm="6">
								<FormGroup>
									<Label for="lastName" />
									<Input type="text" name="last_name" id="last_name" placeholder="Last Name" value={user.last_name} onChange={changeHandler} />
									{errors.last_name.length > 0 ? <p className="error">{errors.last_name}</p> : null}
								</FormGroup>
							</Col>
						</Row>
							<Col sm="12">
								<FormGroup>
									
								<Input type="checkbox" name="terms" checked={user.terms} onChange={changeHandler} />
										 <span onClick={toggle}>Terms and Conditions</span>

									    <Modal isOpen={modal} toggle={toggle}>
									      <ModalHeader toggle={toggle}>Terms and Condtions</ModalHeader>
									      <ModalBody>
									        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
									        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
									        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
									        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
									        mollit anim id est laborum.</p>

									        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
									        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
									        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
									        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
									        mollit anim id est laborum.</p>

									        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
									        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
									        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
									        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
									        mollit anim id est laborum.</p>
									      </ModalBody>
									      <ModalFooter>
									        <Button color="primary" onClick={acceptBtn}>Accept</Button>
									        <Button color="secondary" onClick={toggle}>Cancel</Button>
									      </ModalFooter>
									    </Modal>
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

const mapStateToProps = state => {
    return {
        email: state.email,
		password: state.password,
		first_name: state.first_name,
		last_name: state.last_name,
		terms: state.terms,
		modal: state.modal,
		id: state.id,
    }
}

export default connect (
    mapStateToProps,
	{ submitHandler
	}
) ( Registration );