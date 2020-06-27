import axiosWithAuth from '../util/axiosWithAuth';
import axios from 'axios';
export const TOGGLE_MODAL = "TOGGLE_ON";
export const SUBMIT_REGISTRATION = "SUBMIT_REGISTRATION";
export const SET_TERMS = "SET_TERMS";
export const REMOVE_USER = "REMOVE_USER";
export const ID_ADD_TO_REG= "ID_ADD_TO_REG";
export const USER_CREDS = "USER_CREDS";

export const submitHandler = user => dispatch => {
    // console.log(user)
    dispatch({ type: SUBMIT_REGISTRATION})
    
};

export const removeUser = (id) => dispatch => {
    dispatch({ type: REMOVE_USER })
    axiosWithAuth()
		.delete(`/users/${id}`)
        .then(res=> console.log(res.data.users)
            )
		.catch(err => console.log('Person Not Deleted', err.message))
}

export const update = (user) => dispatch => {
    console.log(user)
    axiosWithAuth()
        .put(`users/${user.id}`, user)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const userCreds = user => dispatch => {
    console.log("userCreds @Actions", user)
    axiosWithAuth()
        .get("/users")
        .then(res =>
                dispatch({ type: USER_CREDS, payload: res.data })
            )
        .catch(err => err)
}


