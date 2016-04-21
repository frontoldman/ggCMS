/**
 * Created by 52913 on 2016/4/10.
 */



export const USER_LIST = 'USER_LIST'
export const BLOG_LIST = 'BLOG_LIST'
export const USERNAME_CHANGE = 'USERNAME_CHANGE'

export function changeUsername(username) {
    return (dispatch, getState) => {
        return dispatch({
            type: USERNAME_CHANGE,
            username
        })
    }
}

