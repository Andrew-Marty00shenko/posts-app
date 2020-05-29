import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import postsReducer from "./posts-reducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    posts: postsReducer,
    form: formReducer
});

let store = createStore(reducers);

export default store;