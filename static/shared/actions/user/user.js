export const USER_START_ADD = 'USER_START_ADD'
export const USER_ADD_SUCCESS = 'USER_ADD_SUCCESS'

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

//具体的异步操作如下
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