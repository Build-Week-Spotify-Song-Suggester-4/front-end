import React, { useState } from "react";
import {Container, Jumbotron, Row, Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from 'react-redux';
import { submitHandler } from '../actions/index'
import { useHistory } from "react-router-dom"
import axiosWithAuth from "../util/axiosWithAuth";

function Registration (props){
	const [user, setUser] = useState({
		email: "",
		password: "",
		first_name: "",
		last_name: "",
		terms: false
	});

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
	}

	const changeHandler = (event) => {
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
									<Input type="email" name="email" id="email" placeholder="Email" value={user.email} onChange={changeHandler} />
								</FormGroup>
							</Col>

							<Col sm="6">
								<FormGroup>
									<Label for="password" />
									<Input type="password" name="password" id="password" placeholder="Password" value={user.password} onChange={changeHandler} />
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col sm="6">
								<FormGroup>
									<Label for="firstName" />
									<Input type="text" name="first_name" id="firstName" placeholder="First Name" value={user.first_name} onChange={changeHandler} />
								</FormGroup>
							</Col>
							<Col sm="6">
								<FormGroup>
									<Label for="lastName" />
									<Input type="text" name="last_name" id="lastName" placeholder="Last Name" value={user.last_name} onChange={changeHandler} />
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
		// terms: state.terms,
		modal: state.modal,
		id: state.id
    }
}

export default connect (
    mapStateToProps,
	{ submitHandler, 
		// acceptBtn 
	}
) ( Registration );