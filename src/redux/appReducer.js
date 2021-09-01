import { auth } from "./AuthReducer";


const SET_INITIALIZED_SUCCSESS = 'SET_INITIALIZED_SUCCSESS';

let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED_SUCCSESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
        type: 'SET_INITIALIZED_SUCCSESS',
    }
}

export const initializedApp = () => (dispatch) => {

    let promise = dispatch(auth())
    Promise.all([promise])
    .then (() => {
        dispatch (initializedSuccess())
    } )
}


export default appReducer;