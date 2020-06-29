//artist then song title	
import React, { useState } from "react";
import { Container, Jumbotron, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

function SearchBar(){
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
		</Container>
		
	);
}

export default SearchBar;