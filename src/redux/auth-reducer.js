import { authAPI } from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    name: null,
    email: null,
    password: null,
    isAuth: false
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

export const setAuthUserData = (name, email, password) => ({
    type: SET_USER_DATA,
    data: { name, email, password }
});

export const registration = (name, email, password) => {
    return (dispatch) => {
        authAPI.registration(name, email, password)
            .then(res => {
                if (res.data) {
                    dispatch(setAuthUserData())
                }
            })
    }
}

export default authReducer;