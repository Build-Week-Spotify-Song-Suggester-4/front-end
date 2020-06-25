import React from "react";
import { Container, Row, Col, TabContent, TabPane } from "reactstrap";
import UserCard from "./UserCard";
import SongCard from "./SongCard";
import PlaylistList from "./PlaylistList";

function TabsContent(props){
	return(
		<TabContent activeTab={props.activeTab}>
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
					<Col sm={{ size: 8, offset: 2 }}>
						<PlaylistList />
					</Col>
				</Row>
			</TabPane>
			<TabPane tabId="3">
				<Container>
					<Row>
						<UserCard />
					</Row>
				</Container>
			</TabPane>
		</TabContent>
	);
}

export default TabsContent;