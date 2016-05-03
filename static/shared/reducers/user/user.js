import { combineReducers } from 'redux'
import { USER_START_ADD, USER_ADD_SUCCESS } from '../../actions/user/user'

function editFetch(state = {isFetching: false, data: null}, action){
	switch(action.type){
		case USER_START_ADD:
			return { ...state, isFetching: true}
		case USER_ADD_SUCCESS:
			return { isFetching: false, data: action.data }
		// case GROUP_START_EDIT:
		// 	return { isFetching: false, data: action.data }
		// case GROUP_STATUS_RESET:
		// 	return { isFetching: false, data: null }
	}
	return state;
}

export default combineReducers({
    editFetch
})