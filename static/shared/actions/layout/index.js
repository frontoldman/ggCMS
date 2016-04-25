
export const URL_CHANGE = 'URL_CHANGE'
export const OPEN_KEYS_CHANGE = 'OPEN_KEYS_CHANGE'

export function changeUrl(url) {
    return (dispatch, getState) => {
        return dispatch({
            type: URL_CHANGE,
            url
        })
    }
}

export function changeOpen(openKeys){
	return (dispatch, getState) => {
		return dispatch({
			type: OPEN_KEYS_CHANGE,
			openKeys
		})
	}
}