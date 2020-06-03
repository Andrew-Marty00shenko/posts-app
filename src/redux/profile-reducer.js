import Axios from "axios";

const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return {
                ...state
            }
    }
}

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export const getUserProfile = (userId) => {
    return dispatch => {
        Axios.get(`http://server-expres.herokuapp.com/users/${userId}`)
            .then(res => {
                dispatch(setProfile(res.data));
            })
    }
}

export default profileReducer;