/**
 * Created by 52913 on 2016/4/9.
 */

import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import UserPage from './containers/user/UserPage'
import UserGroup from './containers/user/UserGroup'
import UserGroupEdit from './containers/user/UserGroupEdit'
import BlogPage from './containers/BlogPage'

export default (
    <Route path="/" component={App}>
        <Route path="/user" component={UserPage} />
        <Route path="/user/group" component={UserGroup} />
        <Route path="/user/group/create" component={UserGroupEdit} />
        <Route path="/user/group/edit/:id" component={UserGroupEdit} />
        <Route path="/blog" component={BlogPage} />
    </Route>
)

