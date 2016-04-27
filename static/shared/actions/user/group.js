
export const GROUP_START_ADD = 'GROUP_START_ADD'
export const GROUP_ADD_SUCCESS = 'GROUP_ADD_SUCCESS'
export const GROUP_LIST_GET = 'GROUP_LIST_GET'

//新增用户组
function addGroup(fields){
  return fetch('/api/user/group/add',{ 
    method:'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body:`name=${fields.name}`
  })
  .then(response => response.json())
}

//获取用户组列表
function getGroupList(){
	return fetch('/api/user/group')
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