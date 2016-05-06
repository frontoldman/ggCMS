/**
 * Created by 52913 on 2016/4/18.
 */

import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import './index.css'

const LoginFetch = dataInit ? 
		{
			isFetching: false,
			loginStatus: 1,
			data: dataInit
		}
		: 
		{
			isFetching: false,
			loginStatus: 0,
			data: null
		}

const store = configureStore({
	user: {
		LoginFetch
	}
})
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
)