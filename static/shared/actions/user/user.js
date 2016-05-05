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
		.then(data => dispatch({
			type: USER_LIST_GET,
			data
		}))
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
			type: USER_LOGIN_SUCCESS
		}))
	}
}

//具体的异步操作如下
//添加用户
function addUser(fields){
	return fetch('/api/user/admin',{ 
			...fetchConfig,
		    method:'POST',
		    headers: {
		      "Content-Type": "application/x-www-form-urlencoded"
		    },
		    body:`name=${fields.name}&group=${fields.group}`
		  })
		  .then(response => response.json())
}

//获取用户列表
function getUserList(){
	return fetch('/api/user/admin',{...fetchConfig})
		.then(response => response.json())
}

//删除单个用户
function deleteUserById(id){
	return fetch(`/api/user/admin/${id}`,{
		...fetchConfig,
		method: 'delete'
	})
	.then(response => response.json())
}

//获取单个用户
function getUserById(id){
	return fetch(`/api/user/admin/${id}`,{...fetchConfig})
	.then(response => response.json())
}

//修改单个用户
function updateUserById(fields, id){
	return fetch(`/api/user/admin/${id}`,{
		...fetchConfig,
		method: 'PUT',
		headers: {
	      "Content-Type": "application/x-www-form-urlencoded"
	    },
	    body:`name=${fields.name}&group=${fields.group}`
	})
	.then(response => response.json())
}

//登陆接口
function login(fields){
	return fetch(`/api/user/login`,{
		...fetchConfig,
		method: 'POST',
		headers: {
	      "Content-Type": "application/x-www-form-urlencoded"
	    },
	    body:`name=${fields.name}&password=${fields.password}&agreement=${agreement}`
	})
	.then(response => response.json())
}
