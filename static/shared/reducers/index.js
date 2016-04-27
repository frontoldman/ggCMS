/**
 * Created by 52913 on 2016/4/12.
 */

import { USER_LIST, USERNAME_CHANGE, BLOG_LIST } from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import layout from './layout/'
import userGroup from './user/group'

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
    layout,
    userGroup,
    setUserName,
    routing
})

export default rootReducer