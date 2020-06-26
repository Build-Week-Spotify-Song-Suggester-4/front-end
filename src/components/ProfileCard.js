import React from "react";
import { Col, Card, CardTitle, CardSubtitle, CardImg, ListGroup, ListGroupItem, Button, UncontrolledCollapse } from "reactstrap";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../actions/index'

const placeholder = require("../placeholder.svg");


function UserCard(props){
	const { push } = useHistory()

	const logout = e => {
		if(localStorage.getItem("token") || localStorage.getItem('ID')){ 
		localStorage.removeItem('token');
		localStorage.removeItem('ID')
		push("/login")
		window.location.reload(true)
		}		
	};

	const id = localStorage.getItem('ID')

	const deleteUser = () => {
		props.removeUser(id)
		localStorage.removeItem('token')
		localStorage.removeItem('ID')
		push("/login")
		window.location.reload(true)
	}

	

	return(
		<Col sm="2">
	    		<Card>
					<div>
						<CardImg src={placeholder} />
						<CardTitle>User Name</CardTitle>
						<CardSubtitle>Actual Name</CardSubtitle>
						
						<Button type="button" id="toggler" block>
							<svg className="bi bi-list" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							  <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
							</svg>
						</Button>
						
					    <UncontrolledCollapse toggler="#toggler">
					          <ListGroup>
							      <ListGroupItem onClick={deleteUser} tag="button" color="danger">DELETE ACCOUNT</ListGroupItem>
								  <ListGroupItem href="/edit-User"tag="button">Update Profile</ListGroupItem>
							      <ListGroupItem tag="button">Preferences</ListGroupItem>
							      <ListGroupItem tag="button">Account Settings</ListGroupItem>
							      <ListGroupItem tag="button">Song Metrics</ListGroupItem>
							      <ListGroupItem onClick={logout} tag="button" color="danger">Sign Out</ListGroupItem>
							   </ListGroup>
					    </UncontrolledCollapse>
					</div>
				</Card>
	    	</Col>
	);
}

const mapStateToProps = state => {
    return {}
}

export default connect (
    mapStateToProps,
	{ removeUser }
) ( UserCard);