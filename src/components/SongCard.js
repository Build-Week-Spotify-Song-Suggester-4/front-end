import React from "react";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg} from "reactstrap";
const placeholder = require("../placeholder.svg");

function SongCard(){
	return(
	<Row>

		<Col sm="6">
			<Card>
				<Row>
					<Col >
						<CardImg src={placeholder} />
					</Col>
					<Col >
						<CardBody>
							<CardTitle>Song name</CardTitle>
							<CardSubtitle>Artist</CardSubtitle>
							<CardText>Genre</CardText>
							<CardText>Duration</CardText>
						</CardBody>
					</Col>
				</Row>
			</Card>
		</Col>
		<Col sm="6">
			<Card>
				<Row>
					<Col >
						<CardImg src={placeholder} />
					</Col>
					<Col >
						<CardBody>
							<CardTitle>Song name</CardTitle>
							<CardSubtitle>Artist</CardSubtitle>
							<CardText>Genre</CardText>
							<CardText>Duration</CardText>
						</CardBody>
					</Col>
				</Row>
			</Card>
		</Col>

		<Col sm="6">
			<Card>
				<Row>
					<Col >
						<CardImg src={placeholder} />
					</Col>
					<Col>
						<CardBody>
							<CardTitle>Song name</CardTitle>
							<CardSubtitle>Artist</CardSubtitle>
							<CardText>Genre</CardText>
							<CardText>Duration</CardText>
						</CardBody>
					</Col>
				</Row>
			</Card>
		</Col>
		<Col sm="6">
			<Card>
				<Row>
					<Col >
						<CardImg src={placeholder} />
					</Col>
					<Col >
						<CardBody>
							<CardTitle>Song name</CardTitle>
							<CardSubtitle>Artist</CardSubtitle>
							<CardText>Genre</CardText>
							<CardText>Duration</CardText>
						</CardBody>
					</Col>
				</Row>
			</Card>
		</Col>
		
	</Row>

		
		
	);
}

export default SongCard;