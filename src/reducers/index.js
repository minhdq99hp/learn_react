import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import userListReducer from './userListReducer';

const reducers = combineReducers({
    counter: counterReducer,
    userList: userListReducer,
});

export default reducers;