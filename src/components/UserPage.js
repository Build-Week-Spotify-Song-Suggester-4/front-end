import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import ProfileCard from "./ProfileCard";
import TabsContent from "./TabsContent";
import Tabs from "./Tabs";

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
					<Tabs activeTab={activeTab} toggle={toggle} />
					<TabsContent activeTab={activeTab} />
				</Col>
			</Row>
		</div>

	);
}

export default UserPage;