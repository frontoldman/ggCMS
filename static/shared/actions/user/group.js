
export const GROUP_START_ADD = 'GROUP_START_ADD'
export const GROUP_ADD_SUCCESS = 'GROUP_ADD_SUCCESS'

function addGroup(fields){
  return fetch('/user/group/add',{ 
    method:'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body:`name=${fields.name}`
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

export function addSuccess(data){
	return dispatch => dispatch({
		type: GROUP_ADD_SUCCESS,
		data
	})
}