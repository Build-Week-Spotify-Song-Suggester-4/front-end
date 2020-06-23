import React from "react";
import { useHistory } from 'react-router-dom'
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardImg, ListGroup, ListGroupItem, Button, UncontrolledCollapse } from "reactstrap";
import axiosWithAuth from "../util/axiosWithAuth";
const placeholder = require("../placeholder.svg");

function UserCard(props){

	const { push } = useHistory()

	const logout = e => {
		if(localStorage.getItem("token")){ 
		localStorage.removeItem('token');
		push("/")
		window.location.reload(true)
		}		
    };


	return(
		<Col sm="2">
	    		<Card>
					<div>
						<CardImg src={placeholder} />
						<CardTitle>User Name</CardTitle>
						<CardSubtitle>Actual Name</CardSubtitle>
						
						<Button type="button" id="toggler" block>
							<svg class="bi bi-list" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
							</svg>
						</Button>
						
					    <UncontrolledCollapse toggler="#toggler">
					          <ListGroup>
							      <ListGroupItem tag="button">Preferences</ListGroupItem>
							      <ListGroupItem tag="button">Account Settings</ListGroupItem>
							      <ListGroupItem tag="button">Song Metrics</ListGroupItem>
							      <ListGroupItem tag="button" color="danger" onClick={logout}>Sign Out</ListGroupItem>
							   </ListGroup>
					    </UncontrolledCollapse>
					</div>
				</Card>
	    	</Col>
	);
}

export default UserCard;