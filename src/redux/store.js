import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import postsReducer from "./posts-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleWare from 'redux-thunk'
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    posts: postsReducer,
    users: usersReducer,
    form: formReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;