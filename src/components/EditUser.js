import React, { useState, useEffect } from "react";
import {Container, Jumbotron, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from 'react-redux';
import { update, userCreds } from '../actions/index'
import { useHistory } from "react-router-dom"

function EditUser(props,{ userCreds, email, password, first_name, last_name, id,}){

    const history = useHistory()

    // const id = localStorage.getItem('ID')

    // console.log(userData)

    const [ userUpdate, setuserUpdate ] = useState({
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name,
        id:id
    })
        
    const updateUser = (e) => {
        e.preventDefault();
        props.update(userUpdate)
        // history.push('/private-route')
        // window.location.reload(true)  
    }
    
    const changeHandler = e => {
        setuserUpdate({
            ...userUpdate,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        return userCreds
    })
    
    console.log(email)

    return(
        <Container>
			<Jumbotron>
					<Form onSubmit={updateUser}>
						<h1>Edit: </h1>
						<Row>
							<Col sm="6">
								<FormGroup>
									<Label for="email"/>
									<Input type="email" name="email" value={userUpdate.email} id="email" placeholder="Email"  onChange={changeHandler} />
								</FormGroup>
							</Col>

							<Col sm="6">
								<FormGroup>
									<Label for="password" />
									<Input type="password" name="password" value={userUpdate.password} id="password" placeholder="Password"  onChange={changeHandler} />
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col sm="6">
								<FormGroup>
									<Label for="firstName" />
									<Input type="text" name="first_name" value={userUpdate.first_name} id="firstName" placeholder="First Name"  onChange={changeHandler} />
								</FormGroup>
							</Col>
							<Col sm="6">
								<FormGroup>
									<Label for="lastName" />
									<Input type="text" name="last_name" value={userUpdate.last_name}id="lastName" placeholder="Last Name"  onChange={changeHandler} />
								</FormGroup>
							</Col>
						</Row>
							<Col sm="12">
								<Button type="submit">Submit Changes</Button>
                                <Button type="button" onClick={()=>{
                                    history.push('/private-route')
                                    window.location.reload(true)}
                                    
                                    } >Back</Button>
							</Col>
					</Form>
			</Jumbotron>
		</Container>
    )
}

const mapStateToProps = state => {
    return {
        email: state.email,
		password: state.password,
		first_name: state.first_name,
		last_name: state.last_name,
        id: state.id
    }
}

export default connect (
    mapStateToProps,
	{ update, userCreds }
) ( EditUser );