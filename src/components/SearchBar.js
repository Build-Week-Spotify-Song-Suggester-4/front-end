//artist then song title	
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Container, Jumbotron, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import SongCard from "./SongCard";
import { tokenAndSearch, getRecommendations } from "../actions";

function SearchBar({ getRecommendations, tokenAndSearch, results }){
	const [query, setQuery] = useState({
		artistName: "",
		songName: ""
	});

	const changeHandler= (event) => {
		setQuery({
			...query,
			[event.target.name]: event.target.value
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();

		setQuery({
			artistName: "",
			songName: ""
		});
	};

	useEffect(() => {
		tokenAndSearch(query)
	}, [query]);

	const clickHandler = (id)=>{
		getRecommendations(id)
	};

	return(
		<Container>
			<Jumbotron>
				<h1>Search</h1>
				<Form onSubmit={submitHandler}>
					<FormGroup>
						<Label hidden>Artist Name</Label>
						<Input type="text" name="artistName" id="artistName" value={query.artistName} onChange={changeHandler} placeholder="Artist Name" />
					</FormGroup>
					<FormGroup>
						<Label hidden>Song Name</Label>
						<Input type="text" name="songName" id="songName" value={query.songName} onChange={changeHandler} placeholder="Song Name" />
					</FormGroup>
					<Button type="submit">Submit</Button>
				</Form>
			</Jumbotron>

		{/* result functionality */}

		<Row>

			{results ? results.map(result => (

				<Col md="6" key={result.id} onClick={() => clickHandler(result.id)}>
					<SongCard result={result}  />
				</Col>
			)): null}
		</Row>
		</Container>
		
	);
}

const mapStateToProps = state => {
    return {
        results: state.results
    }
}

export default connect (
    mapStateToProps,
	{ tokenAndSearch, getRecommendations }
) ( SearchBar );