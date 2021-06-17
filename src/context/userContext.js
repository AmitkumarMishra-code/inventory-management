import { createContext, useReducer } from "react";

const UserContext = createContext({ user: {} })

export default UserContext

let reducer = (state, action) => {
    switch (action.type) {
        case 'set_user':
            return {...state, user: action.payload }
        case 'reset_user':
            return {...state, user: null }
        default:
            return state
    }
}

export function UserContextProvider(props) {
    let initialState = { user: null }
    let [state, dispatch] = useReducer(reducer, initialState)
    return ( <
        UserContext.Provider value = {
            { state, dispatch }
        } > { props.children } <
        /UserContext.Provider>
    )
}