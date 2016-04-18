/**
 * Created by 52913 on 2016/4/12.
 */

import { USER_LIST, USERNAME_CHANGE, BLOG_LIST, } from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

function setUserName(state = {userList:[]},action){
    switch(action.type){
        case USERNAME_CHANGE:
            return {
                userList : [...state.userList,action.username]
            }
            break;
    }
    return state;
}

const rootReducer = combineReducers({
    setUserName,
    routing
})

export default rootReducer