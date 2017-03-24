import { combineReducers } from 'redux';
import * as actions from './actions';

const a11yData = (state={a11yMessage: 'initial'}, action) => {
    switch(action.type){
        case actions.SET_A11Y_MESSAGE:
            return Object.assign({}, state, {a11yMessage: action.message});
        default:
            return state;
    }
};

export const getA11yMessage = (state) => state.a11yData.a11yMessage;

export default combineReducers({a11yData});