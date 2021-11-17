import React from 'react'
import { FORM_OPEN, USER_REGISTER } from '../actions';
import uniqid from 'uniqid';
const user_reducer = (state,action) => {
    if(action.type === USER_REGISTER){
        
        return {...state,users:[...state.users,action.payload]}
    }
    throw new Error(`No Matching "${action.type}" - action type`);
}

export default user_reducer
