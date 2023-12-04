const defaultState = {
    loggedIn: false,
    token: '',
    name: '',
    id: 0,
    role: '',
}

const GET_USERS = 'GET_USERS';
export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USERS:
            console.log(action.payload)
            return state;
        case "LOGIN":
            return {...state, loggedIn: true}
        case "LOGOUT":
            return {...state, loggedIn: false}
        default:
            return state;
    }
}

export const getUsers = (payload) => ({type: GET_USERS, payload})
