import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, UncontrolledCollapse, CardBody } from 'reactstrap';
import classnames from 'classnames';

function UserPage(){
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
  	
    <div>
    	<Container>
    	<Row>
    		<Col sm="3">
	    		<Card>
					<div>
					    <div color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
					      Toggle
					    </div>
					    <UncontrolledCollapse toggler="#toggler">
					      <Card>
					        <CardBody>
					          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
					          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
					          dignissimos esse fuga! Minus, alias.
					        </CardBody>
					      </Card>
					    </UncontrolledCollapse>
					</div>
				</Card>
	    	</Col>

		    <Col>
			      <Nav tabs>
			        <NavItem>
			          <NavLink
			            className={classnames({ active: activeTab === '1' })}
			            onClick={() => { toggle('1'); }}
			          >
			            Tab1
			          </NavLink>
			        </NavItem>
			        <NavItem>
			          <NavLink
			            className={classnames({ active: activeTab === '2' })}
			            onClick={() => { toggle('2'); }}
			          >
			            Moar Tabs
			          </NavLink>
			        </NavItem>
			        <NavItem>
			        	<NavLink
			        		className={classnames({ active: activeTab === '3' })}
			        		onClick={() => { toggle('3'); }}
			        	>
			        		Test Tab
			        	</NavLink>
			        </NavItem>
			      </Nav>
			      <TabContent activeTab={activeTab}>
			        <TabPane tabId="1">
			          <Row>
			            <Col sm="12">
			              <h4>Tab 1 Contents</h4>
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
			        		<Col >
			        			
			        		</Col>
			        	</Row>
			        </TabPane>
			      </TabContent>
		    </Col>
    	</Row>
    	</Container>
    </div>

   
  );
}

export default UserPage;