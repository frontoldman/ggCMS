/**
 * Created by 52913 on 2016/4/10.
 */

import React , { Component , PropTypes } from 'react'
import { connect } from 'react-redux'

class UserGroup extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                UserManage
            </div>
        )
    }
}

export default connect()(UserGroup)