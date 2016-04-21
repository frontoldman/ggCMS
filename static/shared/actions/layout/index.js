
export const URL_CHANGE = 'URL_CHANGE'

export function changeUrl(url) {
    return (dispatch, getState) => {
        return dispatch({
            type: URL_CHANGE,
            url
        })
    }
}