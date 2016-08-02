import ggFetch from '../../util/fetch'


export const USER_START_ADD = 'USER_START_ADD'
export const USER_START_EDIT = 'USER_START_EDIT'
export const USER_ADD_SUCCESS = 'USER_ADD_SUCCESS'
export const USER_STATUS_RESET = 'USER_STATUS_RESET'
export const USER_LIST_GET = 'USER_LIST_GET'
export const USER_DETAIL = 'USER_DETAIL'
export const USER_DELETE_START = 'USER_DELETE_START'
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS'
export const USER_DELETE_RESET = 'USER_DELETE_RESET'
export const USER_LOGIN_START = 'USER_LOGIN_START'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const USER_LOG_OUT = 'USER_LOG_OUT'

const fetchConfig = {credentials: 'include'}

export function startAdd(fields){
	return dispatch => {
		dispatch({
			type: USER_START_ADD
		})
		addUser(fields)
		.then(data => dispatch(addSuccess(data)))
	}
}

export function addSuccess(data){
	return dispatch => dispatch({
		type: USER_ADD_SUCCESS,
		data
	})
}

export function startDelete(id){
	return dispatch => {
		dispatch({
			type: USER_DELETE_START
		})
		deleteUserById(id)
		.then(data => dispatch({
			type: USER_DELETE_SUCCESS,
			data
		}))
	}
}

export function getList(){
	return dispatch => {
		getUserList()
		.then(data => {
			return dispatch({
				type: USER_LIST_GET,
				data
			})
		})
	}
}

export function resetDeleteStatus(){
	return dispatch => dispatch({
		type: USER_DELETE_RESET
	})
}

export function resetUserStatus(){
	return dispatch => dispatch({
		type: USER_STATUS_RESET
	})
}

export function getUserDetail(id){
	return dispatch => {
		getUserById(id)
		.then(data => dispatch({
			type: USER_DETAIL,
			data
		}))
	}
}

export function startEdit(fields, id){
	return dispatch => {
		dispatch({
			type: USER_START_EDIT
		})
		updateUserById(fields, id)
		.then(data => dispatch({
			type: USER_ADD_SUCCESS,
			data
		}))
	}
}

export function startLogin(fields){
	return dispatch => {
		dispatch({
			type: USER_LOGIN_START
		})

		login(fields)
		.then(data => dispatch({
			type: USER_LOGIN_SUCCESS,
			data
		}))
	}
}

export function startLogOut(){
	return dispatch => {
		logout()
		.then(data => dispatch({
			type: USER_LOG_OUT
		}))
	}
}

//具体的异步操作如下
//添加用户
function addUser(fields){
	return ggFetch('/api/user/admin',{ 
		    method:'POST',
		    headers: {
		      "Content-Type": "application/x-www-form-urlencoded"
		    },
		    body:`username=${fields.username}&nickname=${fields.nickname}&group=${fields.group}`
		  })
}

//获取用户列表
function getUserList(){
	return ggFetch('/api/user/admin')
}

//删除单个用户
function deleteUserById(id){
	return ggFetch(`/api/user/admin/${id}`,{
		method: 'delete'
	})
}

//获取单个用户
function getUserById(id){
	return ggFetch(`/api/user/admin/${id}`)
}

//修改单个用户
function updateUserById(fields, id){
	return fetch(`/api/user/admin/${id}`,{
		method: 'PUT',
		headers: {
	      "Content-Type": "application/x-www-form-urlencoded"
	    },
	    body:`username=${fields.username}&nickname=${fields.nickname}&group=${fields.group}`
	})
}

//登陆接口
function login(fields){
	return ggFetch(`/api/login`,{
		method: 'POST',
		headers: {
	      "Content-Type": "application/x-www-form-urlencoded"
	    },
	    body:`username=${fields.username}&password=${fields.password}&agreement=${fields.agreement}`
	})
}

function logout(){
	return ggFetch(`/api/logout`)
}