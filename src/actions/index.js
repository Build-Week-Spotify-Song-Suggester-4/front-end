import axiosWithAuth from '../util/axiosWithAuth';
import axios from 'axios';
export const SUBMIT_REGISTRATION = "SUBMIT_REGISTRATION";
export const REMOVE_USER = "REMOVE_USER";
export const USER_CREDS = "USER_CREDS";
export const TOKEN_AND_SEARCH = "TOKEN_AND_SEARCH";
export const GET_RECOMMENDATIONS = "GET_RECOMMENDATIONS"

export const submitHandler = user => dispatch => {
    dispatch({ type: SUBMIT_REGISTRATION})
};

export const removeUser = (id) => dispatch => {
    dispatch({ type: REMOVE_USER })
    axiosWithAuth()
		.delete(`/users/${id}`)
        .then(res=> res)
		.catch(err => console.log('Person Not Deleted', err.message))
}

export const update = (user) => dispatch => {
    axiosWithAuth()
        .put(`users/${user.id}`, user)
        .then(res => console.log("From update @ Actions", res))
        .catch(err => console.log(err))
}

export const userCreds = () => dispatch => {
        let user_id = localStorage.getItem('ID');

    axiosWithAuth().get(`/users`)
            .then(res=>{
                let users_arr = res.data.users
                let editable_user = users_arr.filter((user)=> user.id == user_id)
                dispatch({ type: USER_CREDS, payload: editable_user[0]})
            })
            .catch(err=>console.log(err)) 
}

export const tokenAndSearch = (query) => dispatch => {
    const clientId = "fad6324956ce4ca386cfb9ab5ade7ff6";
	const clientSecret = "b794e2de00504350ae4e9f245f1c4218";

	const options = {
		headers: {
			"Content-Type" : "application/x-www-form-urlencoded",
			"Authorization": "Basic " + btoa(clientId + ":" + clientSecret) 
		} 
	};

	const body = "grant_type=client_credentials";
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
                // setResults(res.data.tracks.items);
                dispatch({ type: TOKEN_AND_SEARCH, payload: res.data.tracks.items})
			});
		});
    
}

export const getRecommendations = (id) => dispatch => {
    const clientId = "fad6324956ce4ca386cfb9ab5ade7ff6";
	const clientSecret = "b794e2de00504350ae4e9f245f1c4218";

	const options = {
		headers: {
			"Content-Type" : "application/x-www-form-urlencoded",
			"Authorization": "Basic " + btoa(clientId + ":" + clientSecret) 
		} 
    };
    
    const body = "grant_type=client_credentials";

    axios.post("https://accounts.spotify.com/api/token", body, options).then(res => {
			const token = res.data.access_token;
			const options = {
				headers: {
					"Authorization": "Bearer " + token
				}
			};

			axios.get("https://api.spotify.com/v1/recommendations?seed_tracks=" + id, options).then(res => {
				console.log(res.data.tracks);
                // setResults(res.data.tracks);
                dispatch({ type: GET_RECOMMENDATIONS, payload: res.data.tracks})
			});
		});
}


