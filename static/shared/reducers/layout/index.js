import { combineReducers } from 'redux'
import { URL_CHANGE, OPEN_KEYS_CHANGE } from '../../actions/layout/'

const urls = {
        '/user/group':{
            current:'1',
            openKeys:['sub1']
        },
        '/user/':{
            current:'2',
            openKeys:['sub1', '2']
        }
    }

function setUrl(state = {current:'1'},action){
    switch(action.type){
        case URL_CHANGE:
            const url = action.url ? action.url : '/user/group'
            return {...urls[action.url]}
    }

    return state;
}

function setOpenKeys(state = {openKeys:['sub1']},action){
    switch(action.type){
        case OPEN_KEYS_CHANGE:
            return {openKeys:action.openKeys}
            break;
    }

    return state;
}

export default combineReducers({
    setUrl,
    setOpenKeys
})