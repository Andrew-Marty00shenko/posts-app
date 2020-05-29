const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    data: [
        { id: 1, name: "Andrew", lastName: "Martyshenko", posts: "0" }
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}

export const setProfile = () => ({ type: SET_PROFILE });

export default profileReducer;