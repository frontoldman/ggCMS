/**
 * Created by 52913 on 2016/4/18.
 */

import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

console.log(1)

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
)