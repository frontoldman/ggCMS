/**
 * Created by 52913 on 2016/4/9.
 */

import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import BlogPage from './containers/BlogPage'

export default (
    <Route path="/" component={App}>
        <Route path="/user" component={UserPage}/>
        <Route path="/blog" component={BlogPage}/>
    </Route>
)

