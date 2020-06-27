import React from "react";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg} from "reactstrap";
//const placeholder = require("../placeholder.svg");

function SongCard(props){
	return(
	

	
			<Card>
				<Row>
					<Col >
						<CardImg src={props.result.album.images[0].url} />
					</Col>
					<Col >
						<CardBody>
							<CardTitle>{props.result.name}</CardTitle>
							<CardSubtitle>{props.result.artists[0].name}</CardSubtitle>
							<CardText>{props.result.album.release_date}</CardText>
						</CardBody>
					</Col>
				</Row>
			</Card>
	
	

		
		
	);
}

export default SongCard;