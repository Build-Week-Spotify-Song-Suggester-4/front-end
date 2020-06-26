//artist then song title	
import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import SongCard from "./SongCard";
import axios from "axios";

function SearchBar(){
	const [query, setQuery] = useState({
		artistName: "",
		songName: ""
	});

	const [results, setResults] = useState([]);

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

	const clientId = "fad6324956ce4ca386cfb9ab5ade7ff6";
	const clientSecret = "b794e2de00504350ae4e9f245f1c4218";

	const options = {
		headers: {
			"Content-Type" : "application/x-www-form-urlencoded",
			"Authorization": "Basic " + btoa(clientId + ":" + clientSecret) 
		} 
	};

	const body = "grant_type=client_credentials";

	useEffect(() => {
		axios.post("https://accounts.spotify.com/api/token", body, options).then(res => {
			const token = res.data.access_token;
			const options = {
				headers: {
					"Authorization": "Bearer " + token
				}
			};
			const nameQuery = query.artistName.split(" ").join("+");
			const songQuery = query.songName.split(" ").join("+");

			axios.get("https://api.spotify.com/v1/search?q=" + nameQuery + "+" + songQuery + "&type=track", options).then(res => {
				
				console.log(res.data.tracks.items);
				setResults(res.data.tracks.items);
			});
		});
	}, [query]);
	

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


		{/*result functionality*/}
		<Row>
			{results.map(result => (
				<Col md="6">
					<SongCard result={result} />
				</Col>
			))}
		</Row>
		

			
		
		</Container>
		
	);
}

export default SearchBar;