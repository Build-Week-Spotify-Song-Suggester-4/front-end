import React from "react";
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardImg, ListGroup, ListGroupItem, Button, UncontrolledCollapse } from "reactstrap";
const placeholder = require("../placeholder.svg");
const menuIcon = require("../open-menu.svg");

function UserCard(){
	return(
		<Col sm="2">
	    		<Card>
					<div>
						<CardImg src={placeholder} />
						<CardTitle>User Name</CardTitle>
						<CardSubtitle>Actual Name</CardSubtitle>
						<Col sm="6">
							<span id="toggler" style={{ marginBottom: '1rem' }}>
						      <CardImg src={menuIcon} />
						    </span>
						</Col>
					    <UncontrolledCollapse toggler="#toggler">
					          <ListGroup>
							      <ListGroupItem tag="button">Preferences</ListGroupItem>
							      <ListGroupItem tag="button">Account Settings</ListGroupItem>
							      <ListGroupItem tag="button">Song Metrics</ListGroupItem>
							      <ListGroupItem tag="button" color="danger">Sign Out</ListGroupItem>
							   </ListGroup>
					    </UncontrolledCollapse>
					</div>
				</Card>
	    	</Col>
	);
}

export default UserCard;