/**
 * Created by 52913 on 2016/4/10.
 */

import React , { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeUsername } from '../../actions'


class UserPage extends Component { 
    constructor(props) {
        super(props)
        this.handleChangeNameClick = this.handleChangeNameClick.bind(this);
    }

    handleChangeNameClick() {
        this.props.changeUsername('haha')
    }

    render() {
        const { userList, children } = this.props;
        return (
            <div>
                UserPage
                {userList.map(item => {
                    return (<p>{item}</p>)
                })}
                <button onClick={this.handleChangeNameClick}>点击修改username</button>

                {children}
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