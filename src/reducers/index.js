import { TOGGLE_MODAL, ID_ADD_TO_REG } from '../actions/index';

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
        case ID_ADD_TO_REG:
            console.log("Reducer @ ID_ADD_TO_REG", action.payload)
            return{
                ...state,
                id: Date.now()
            }     
            default:
                return state;
    }
}