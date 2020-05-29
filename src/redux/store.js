import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import postsReducer from "./posts-reducer";
import { reducer as formReducer } from 'redux-form';
import authReducer from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    posts: postsReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;