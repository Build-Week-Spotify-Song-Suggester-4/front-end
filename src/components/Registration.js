import React, { useState } from "react";
import {Container, Jumbotron, Row, Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Registration (props){


	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);



	return(
		<Container>
			<Jumbotron>
					<Form>
						<h1>Register: </h1>
						<Row>
							<Col sm="6">
								<FormGroup>
									<Label for="username" />
									<Input type="username" name="username" id="username" placeholder="username" />
								</FormGroup>
							</Col>

							<Col sm="6">
								<FormGroup>
									<Label for="password" />
									<Input type="password" name="password" id="password" placeholder="password" />
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col sm="6">
								<FormGroup>
									<Label for="firstName" />
									<Input type="text" name="firstName" id="firstName" placeholder="first name" />
								</FormGroup>
							</Col>
							<Col sm="6">
								<FormGroup>
									<Label for="lastName" />
									<Input type="text" name="lastName" id="lastName" placeholder="last name" />
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col sm={{ size: 8, offset: 2 }}>
								<FormGroup>
									<Label for="email" />
									<Input type="email" name="email" id="email" placeholder="email" />
								</FormGroup>
							</Col>
						</Row>
							<Col sm="12">
								<FormGroup>
									
										<Input type="checkbox" />
										 <span onClick={toggle}>Terms and Conditions</span>
									    <Modal isOpen={modal} toggle={toggle}>
									      <ModalHeader toggle={toggle}>Terms and Condtions</ModalHeader>
									      <ModalBody>
									        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
									        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
									        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
									        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
									        mollit anim id est laborum.

									        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
									        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
									        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
									        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
									        mollit anim id est laborum.

									        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
									        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
									        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
									        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
									        mollit anim id est laborum.
									      </ModalBody>
									      <ModalFooter>
									        <Button color="primary" onClick={toggle}>Accept</Button>
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