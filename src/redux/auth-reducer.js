import Axios from "axios";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    name: null,
    email: null,
    password: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return { ...state }
    }
}

export const regUser = (name, email, password) => ({ type: SET_USER_DATA, data: { name, email, password } });

export const userRegist = (name, email, password) => {
    return dispatch => {
        return Axios.post('https://server-expres.herokuapp.com/auth/registration',
            { name, email, password }
        ).then(res => console.log(res))
            .then(data => {
                console.log(data)
                dispatch(regUser(data.data));
            })
    }
}

export const userLog = (email, password) => {
    return dispatch => {
        return Axios.post('https://server-expres.herokuapp.com/auth/registration',
            { email, password }
        ).then(res => console.log(res))
            .then(data => {
                console.log(data)
                dispatch(regUser(data));
            })
    }
}


export default authReducer;