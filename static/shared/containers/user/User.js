/**
 * Created by 52913 on 2016/4/10.
 */

import React , { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { Table, Button, notification, Popconfirm} from 'antd';
import { Link, browserHistory } from 'react-router'
import { changeUsername } from '../../actions'


class UserPage extends Component { 
    constructor(props) {
        super(props)
    }

    render() {
        const { userList, children } = this.props;
        return (
            <div>
                <Button onClick={() => browserHistory.push('/user/admin/create')} type="primary" size="large">添加用户</Button>
                <br />
                <br />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    console.log(state)

    return {
        userList:state.setUserName.userList
    }
}

export default connect(mapStateToProps, {
    changeUsername
})(UserPage)