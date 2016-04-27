import { combineReducers } from 'redux'
import { GROUP_START_ADD, GROUP_ADD_SUCCESS } from '../../actions/user/group'

function fetch(state = {isFetching: false, data: {}}, action){
	switch(action.type){
		case GROUP_START_ADD:
			return {...state, isFetching: true}
			break;
		case GROUP_ADD_SUCCESS:
			return { isFetching: false, data: action.data }
			break;
	}
	return state;
}

export default combineReducers({
    fetch
})