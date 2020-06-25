import axiosWithAuth from '../util/axiosWithAuth';
export const TOGGLE_MODAL = "TOGGLE_ON";
export const SUBMIT_REGISTRATION = "SUBMIT_REGISTRATION";
export const SET_TERMS = "SET_TERMS";
export const ID = "ID";
export const REMOVE_USER ="REMOVE_USER"

export const submitHandler = user => dispatch => {
    console.log(user)
    dispatch({ type: SUBMIT_REGISTRATION})
    axiosWithAuth()
    .post("/auth/register", user )
    .then(res => {
        localStorage.setItem("token", res.data.token);
    })
    .catch(err => alert("Error Registering. Please Try Again", err.message, err.response));
};

export const removeUser = (id) => dispatch => {
    dispatch({ type: REMOVE_USER })
    axiosWithAuth()
		.delete(`/users/${id}`)
        .then(res=> res
            )
		.catch(err => console.log('Person Not Deleted', err.message))
}

// export const acceptBtn = toggle => dispatch => {
//     console.log(toggle)
//         dispatch({ type: TOGGLE_MODAL, payload: toggle.modal })
//         dispatch({ type: SET_TERMS, payload: toggle.terms})
// }

