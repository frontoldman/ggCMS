
export const GROUP_START_ADD = 'GROUP_START_ADD'
export const GROUP_START_EDIT = 'GROUP_START_EDIT'
export const GROUP_ADD_SUCCESS = 'GROUP_ADD_SUCCESS'
export const GROUP_LIST_GET = 'GROUP_LIST_GET'
export const GROUP_DETAIL = 'GROUP_DETAIL'
export const GROUP_STATUS_RESET = 'GROUP_STATUS_RESET'
export const GROUP_DELETE_START = 'GROUP_DELETE_START'
export const GROUP_DELETE_SUCCESS = 'GROUP_DELETE_SUCCESS'
export const GROUP_DELETE_RESET = 'GROUP_DELETE_RESET'

//新增用户组
function addGroup(fields){
  return fetch('/api/user/group',{ 
    method:'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body:`name=${fields.name}`
  })
  .then(response => response.json())
}

//编辑用户组
function editGroup(fields,id){
	return fetch(`/api/user/group/${id}`,{ 
    method:'PUT',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body:`name=${fields.name}&id=${id}`
  })
  .then(response => response.json())
}

//获取用户组列表
function getGroupList(id){
	return fetch('/api/user/group',{
		method: 'GET'
	})
  	.then(response => response.json())
}

//获取单个用户组详细信息
function getGroupById(id){
	return fetch(`/api/user/group/${id}`)
		.then(response => response.json())
}

//删除单个组
function deleteGroupById(id){
	return fetch(`/api/user/group/${id}`,{
		method: 'delete'
	})
	.then(response => response.json())
}

export function startAdd(fields){
	return dispatch => {
		dispatch({
			type: GROUP_START_ADD
		})
		addGroup(fields)
		.then(data => dispatch(addSuccess(data)))
	}
}

export function startEdit(fields, id){
	return dispatch => {
		dispatch({
			type: GROUP_START_EDIT
		})
		editGroup(fields, id)
		.then(data => dispatch(addSuccess(data)))
	}	
}

export function addSuccess(data){
	return dispatch => dispatch({
		type: GROUP_ADD_SUCCESS,
		data
	})
}

export function getList(){
	return dispatch => {
		getGroupList()
		.then(data => dispatch({
			type: GROUP_LIST_GET,
			data
		}))
	}
}

export function getGroupDetail(id){
	return distach => {
		getGroupById(id)
		.then(data => distach({
			type: GROUP_DETAIL,
			data
		}))
	}
}

export function resetGroupStatus(){
	return dispatch => dispatch({
		type: GROUP_STATUS_RESET
	})
}

export function startDelete(id){
	return dispatch => {
		dispatch({
			type: GROUP_DELETE_START
		})

		deleteGroupById(id)
		.then(data => dispatch({
			type: GROUP_DELETE_SUCCESS
		}))
	}
}

export function resetDeleteStatus(){
	return dispatch => dispatch({
		type: GROUP_DELETE_RESET
	})
}
