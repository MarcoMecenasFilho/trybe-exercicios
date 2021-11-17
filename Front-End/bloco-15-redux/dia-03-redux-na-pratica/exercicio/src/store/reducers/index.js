import { combineReducers } from "redux";


const INITIAL_STATE = [];

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
    return action.value;
    default:
      return state;
  }
}

const INITIAL_STATE2 = []


const userReducer = (state = INITIAL_STATE2, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return [...state, action.data];
    default:
    return state;
  }
}

const rootReducer = combineReducers(loginReducer, userReducer );

export default rootReducer;
