import { USER_CREDS, TOKEN_AND_SEARCH, GET_RECOMMENDATIONS } from '../actions';

const initialState = {
        email: "",
		password: "",
		first_name: "",
        last_name: "",
        id:"",
        terms: false,
}
export const reducer = ( state = initialState, action ) => {
    switch(action.type) {
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
        case TOKEN_AND_SEARCH:
            console.log(action.payload)
            return{
                ...state,
                results: action.payload
            }
        case GET_RECOMMENDATIONS:
            return{
                ...state,
                results: action.payload
            }
            default:
                return state;
    }
}
