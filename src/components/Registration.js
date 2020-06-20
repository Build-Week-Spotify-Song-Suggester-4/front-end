import React, { useState } from "react";
import {Container, Jumbotron, Row, Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Registration (props){
	const [user, setUser] = useState({
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		email: "",
		terms: false
	});

	const [check, setCheck] = useState(false);

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const acceptBtn = () => {
		toggle();
		setUser({
			...user,
			terms: true
		});
	}

	const onSubmit = (event) => {
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
									<Label for="username" />
									<Input type="username" name="username" id="username" placeholder="username" value={user.username} onChange={changeHandler} />
								</FormGroup>
							</Col>

							<Col sm="6">
								<FormGroup>
									<Label for="password" />
									<Input type="password" name="password" id="password" placeholder="password" value={user.password} onChange={changeHandler} />
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col sm="6">
								<FormGroup>
									<Label for="firstName" />
									<Input type="text" name="firstName" id="firstName" placeholder="first name" value={user.firstName} onChange={changeHandler} />
								</FormGroup>
							</Col>
							<Col sm="6">
								<FormGroup>
									<Label for="lastName" />
									<Input type="text" name="lastName" id="lastName" placeholder="last name" value={user.lastName} onChange={changeHandler} />
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col sm={{ size: 8, offset: 2 }}>
								<FormGroup>
									<Label for="email" />
									<Input type="email" name="email" id="email" placeholder="email" value={user.email} onChange={changeHandler} />
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

export default Registration;