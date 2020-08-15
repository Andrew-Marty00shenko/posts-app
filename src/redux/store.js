import { combineReducers, createStore } from 'redux';
import menuReducer from './reducers/menu';

const reducers = combineReducers({
    menu: menuReducer
});

const store = createStore(reducers);

export default store;