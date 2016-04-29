import { combineReducers } from 'redux'
import { 
	GROUP_START_ADD, 
	GROUP_START_EDIT, 
	GROUP_ADD_SUCCESS, 
	GROUP_LIST_GET, 
	GROUP_DETAIL,
	GROUP_STATUS_RESET,
	GROUP_DELETE_START,
	GROUP_DELETE_SUCCESS,
	GROUP_DELETE_RESET } from '../../actions/user/group'

function editFetch(state = {isFetching: false, data: null}, action){
	switch(action.type){
		case GROUP_START_ADD:
			return { ...state, isFetching: true}
		case GROUP_ADD_SUCCESS:
			return { isFetching: false, data: action.data }
		case GROUP_START_EDIT:
			return { isFetching: false, data: action.data }
		case GROUP_STATUS_RESET:
			return { isFetching: false, data: null }
	}
	return state;
}

function listFetch(state = {list: []}, action){
	switch(action.type){
		case GROUP_LIST_GET:
			return {list: action.data}
	}
	return state;
}

function detailFetch(state = {data: null}, action){
	switch(action.type){
		case GROUP_DETAIL:
			return { data: action.data }
	}
	return state;
}

function deleteFetch(state = { deletingStatus: -1 }, action){
	switch(action.type){
		case GROUP_DELETE_START:
			return { deletingStatus: 0}
		case GROUP_DELETE_SUCCESS:
			return { deletingStatus: 1}
		case GROUP_DELETE_RESET:
			return { deletingStatus: -1 }
	}

	return state;
}

export default combineReducers({
    editFetch,
    listFetch,
    detailFetch,
    deleteFetch
})