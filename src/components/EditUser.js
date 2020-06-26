import React, { useState } from "react";
import {Container, Jumbotron, Row, Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import { connect } from 'react-redux';
// import { submitHandler, /*acceptBtn*/ } from '../actions/index'
// import { useHistory } from "react-router-dom"

export default function EditUser(){

    const [userUpdate, setuserUpdate] = useState()

    const update = (props) => {
		props.upDate()
    }
    
    const changeHandler = e => {
        setuserUpdate({
            ...userUpdate,
            [e.target.name]: e.target.value
        })
    }

    return(
        <Container>
			<Jumbotron>
					<Form onSubmit={update}>
						<h1>Register: </h1>
						<Row>
							<Col sm="6">
								<FormGroup>
									<Label for="email" />
									<Input type="email" name="email" id="email" placeholder="Email" value={userUpdate.email} onChange={changeHandler} />
								</FormGroup>
							</Col>

							<Col sm="6">
								<FormGroup>
									<Label for="password" />
									<Input type="password" name="password" id="password" placeholder="Password" value={userUpdate.password} onChange={changeHandler} />
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col sm="6">
								<FormGroup>
									<Label for="firstName" />
									<Input type="text" name="first_name" id="firstName" placeholder="First Name" value={userUpdate.first_name} onChange={changeHandler} />
								</FormGroup>
							</Col>
							<Col sm="6">
								<FormGroup>
									<Label for="lastName" />
									<Input type="text" name="last_name" id="lastName" placeholder="Last Name" value={userUpdate.last_name} onChange={changeHandler} />
								</FormGroup>
							</Col>
						</Row>
							<Col sm="12">
								<Button type="submit">Log In</Button>
							</Col>
					</Form>
			</Jumbotron>
		</Container>
    )
}