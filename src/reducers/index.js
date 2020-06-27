import { TOGGLE_MODAL, USER_CREDS } from '../actions/index';

const initialState = {
        email: "",
		password: "",
		first_name: "",
        last_name: "",
        id:""
}
export const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case TOGGLE_MODAL:
            console.log(action.payload)
            return {
                  ...state,
                  modal: action.payload
            }
        case USER_CREDS:
            console.log("Reducer @ USER_CREDS", action.payload)
            return{
               ...state,
                email: action.payload.email,
		        password: action.payload.password,
		        first_name: action.payload.first_name,
		        last_name: action.payload.last_name,
		        id: action.payload.id
            }     
            default:
                return state;
    }
}