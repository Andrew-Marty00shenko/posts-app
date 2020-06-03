const SET_USER = "SET_USER"

let initialState = {
    isLoggedIn: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        default: {
            return state
        }
    }
}

export const setUser = (isLoggedIn) => ({ type: SET_USER, isLoggedIn })

export default authReducer

