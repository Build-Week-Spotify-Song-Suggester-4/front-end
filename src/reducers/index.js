import { TOGGLE_MODAL, ID } from '../actions/index';

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
            default:
                return state;
    }
}