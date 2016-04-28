import { combineReducers } from 'redux'
import { GROUP_START_ADD, GROUP_ADD_SUCCESS, GROUP_LIST_GET, GROUP_DETAIL } from '../../actions/user/group'

function createFetch(state = {isFetching: false, data: null}, action){
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

function listFetch(state = {list: []}, action){
	switch(action.type){
		case GROUP_LIST_GET:
			return {list: action.data}
			break;
	}
	return state;
}

function detailFetch(state = {data:{}}, action){
	switch(action.type){
		case GROUP_DETAIL:
			return { data: action.data }
			break;
	}
	return state;
}

export default combineReducers({
    createFetch,
    listFetch,
    detailFetch
})