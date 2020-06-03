import Axios from "axios";

const SET_USERS = 'SET_USERS';

const URL = "https://server-expres.herokuapp.com/users/all";

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}

export const setUsers = (users) => ({ type: SET_USERS, users });

export const getUsers = () => dispatch => {
    Axios.get(URL).then(res => {
        console.log(res.data.users);
        dispatch(setUsers(res.data.users));
    })
}

export default usersReducer;