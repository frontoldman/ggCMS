export const USER_START_ADD = 'USER_START_ADD'
export const USER_ADD_SUCCESS = 'USER_ADD_SUCCESS'
export const USER_LIST_GET = 'USER_LIST_GET'
export const USER_DELETE_START = 'USER_DELETE_START'
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS'
export const USER_DELETE_RESET = 'USER_DELETE_RESET'


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

//具体的异步操作如下
//添加用户
function addUser(fields){
	return fetch('/api/user/admin',{ 
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
	return fetch('/api/user/admin')
		.then(response => response.json())
}

//删除单个用户
function deleteUserById(id){
	return fetch(`/api/user/admin/${id}`,{
		method: 'delete'
	})
	.then(response => response.json())
}
