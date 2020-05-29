const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    name: null,
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

export const setAuthUserData = (userId, name, password, isAuth) => ({
    type: SET_USER_DATA,
    data: { userId, name, password, isAuth }
});

export default authReducer;