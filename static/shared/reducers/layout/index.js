import { combineReducers } from 'redux'
import { URL_CHANGE, changeUrl } from '../../actions/layout/'

const urls = {
        '/user/addManage':{
            current:'1',
            openKeys:['sub1','1']
        },
        '/user/':{
            current:'1',
            openKeys:['sub1']
        }
    }

function setUrl(state = {current:'1',openKeys:['sub1','1']},action){
    switch(action.type){
        case URL_CHANGE:
            const url = action.url ? action.url : '/user/addManage'
            return {...urls[action.url]}
    }
    return state;
}

export default combineReducers({
    setUrl
})