import axiosWithAuth from '../util/axiosWithAuth';
export const TOGGLE_MODAL = "TOGGLE_ON";
export const SUBMIT_REGISTRATION = "SUBMIT_REGISTRATION";
export const SET_TERMS = "SET_TERMS";
export const REMOVE_USER = "REMOVE_USER";
export const ID_ADD_TO_REG= "ID_ADD_TO_REG";
export const USER_CREDS = "USER_CREDS";

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

export const userCreds = user => dispatch => {
    axiosWithAuth()
        .get("/users")
        .then(res =>
                {console.log('res.data', res.data);
                dispatch({ type: USER_CREDS, payload: res.data })}
            )
        .catch(err => err)
}



