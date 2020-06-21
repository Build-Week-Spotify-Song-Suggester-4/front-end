import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, UncontrolledCollapse, CardBody } from 'reactstrap';
import classnames from 'classnames';
import SongCard from "./SongCard";
import ProfileCard from "./ProfileCard";
import UserCard from "./UserCard";

function UserPage(){
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
  	
    <div>
    	<Row>
    		<ProfileCard />
    	

		    <Col sm="9">

			      <Nav tabs>
			        <NavItem>
			          <NavLink
			            className={classnames({ active: activeTab === '1' })}
			            onClick={() => { toggle('1'); }}
			          >
			            Profile
			          </NavLink>
			        </NavItem>
			        <NavItem>
			          <NavLink
			            className={classnames({ active: activeTab === '2' })}
			            onClick={() => { toggle('2'); }}
			          >
			            Saved Playlists
			          </NavLink>
			        </NavItem>
			        <NavItem>
			        	<NavLink
			        		className={classnames({ active: activeTab === '3' })}
			        		onClick={() => { toggle('3'); }}
			        	>
			        		Followers
			        	</NavLink>
			        </NavItem>
			      </Nav>

			      <TabContent activeTab={activeTab}>
			        <TabPane tabId="1">
			          <Row>
			            <Col sm={{ size: 8, offset:2 }}>
							<h4>About Me</h4>
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
			            </Col>
			          </Row>
			          <Row>
			          	<Col sm="12">
			          		<h4>Recently Played</h4>
			          	</Col>
			          	<Col>
			          		<SongCard />
			          	</Col>
			          </Row>
			        </TabPane>
			        <TabPane tabId="2">
			          <Row>
			            <Col sm="6">
			              <Card body>
			                <CardTitle>Special Title Treatment</CardTitle>
			                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
			                <Button>Go somewhere</Button>
			              </Card>
			            </Col>
			            <Col sm="6">
			              <Card body>
			                <CardTitle>Special Title Treatment</CardTitle>
			                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
			                <Button>Go somewhere</Button>
			              </Card>
			            </Col>
			          </Row>
			        </TabPane>
			        <TabPane tabId="3">
			        	<Row>
			        		<UserCard />
			        	</Row>
			        </TabPane>
			      </TabContent>
		    </Col>
    	</Row>
    	
    </div>

   
  );
}

export default UserPage;