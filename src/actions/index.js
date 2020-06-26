import axiosWithAuth from '../util/axiosWithAuth';
export const TOGGLE_MODAL = "TOGGLE_ON";
export const SUBMIT_REGISTRATION = "SUBMIT_REGISTRATION";
export const SET_TERMS = "SET_TERMS";
export const REMOVE_USER = "REMOVE_USER";
export const ID_ADD_TO_REG= "ID_ADD_TO_REG";

export const submitHandler = user => dispatch => {
    // console.log(user)
    dispatch({ type: SUBMIT_REGISTRATION})
    axiosWithAuth()
    .post("/auth/register", user )
    .then(res => {
        // dispatch({ type: ID_ADD_TO_REG, payload: user})
        console.log(res.data.users);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("ID", res.data.user.id);
    })
    .catch(err => alert("Error Registering. Please Try Again", err.message, err.response));
};

export const removeUser = (id) => dispatch => {
    dispatch({ type: REMOVE_USER })
    axiosWithAuth()
		.delete(`auth/users/${id}`)
        .then(res=> console.log(res.data.users)
            )
		.catch(err => console.log('Person Not Deleted', err.message))
}

export const update = (update) => dispatch => {
    axiosWithAuth()
        .put(`auth/users/${update.id}`, update)
        .then(res => res)
        .catch(err => err)
}

// export const acceptBtn = toggle => dispatch => {
//     console.log(toggle)
//         dispatch({ type: TOGGLE_MODAL, payload: toggle.modal })
//         dispatch({ type: SET_TERMS, payload: toggle.terms})
// }

