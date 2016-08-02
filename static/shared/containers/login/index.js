/**
 * Created by 52913 on 2016/4/20.
 */

import React, { Component , PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
//import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';
//import openNotificationWithIcon from '../../util/openNotificationWithIcon'
import { startLogin } from '../../actions/user/user'

//const FormItem = Form.Item;
//const RadioGroup = Radio.Group;

 class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {};
    }

    handleSubmit(e) {
    	e.preventDefault(); 
      	this.props.startLogin(this.state)
    }

    componentWillReceiveProps(nextProps) {
      const { LoginFetch } = nextProps;

      switch(LoginFetch.loginStatus){
      	case 1:
      		//openNotificationWithIcon('success','登陆成功');
			browserHistory.push('/user/admin')	
      		break;
      	case -1:
      		break;
      }
	}

    render() {

	    return (
	    	<div className="pure-g" style={{marginTop: '100px'}}>
	    		<div className="pure-u-1-3"></div>
	    		<div className="pure-u-1-3">
			      	<form className="pure-form pure-form-stacked">
					   <fieldset>
					        <legend>果果cms</legend>

					        <label>输入用户名</label>
					        <input onChange={e => this.state.username = e.target.value} type="text" placeholder="用户名"/>

					        <label>输入密码</label>
					        <input onChange={e => this.state.password = e.target.value} type="password" placeholder="密码"/>

					        <label htmlFor="remember" className="pure-checkbox">
					            <input id="remember" onChange={e => this.state.agreement = e.target.value === 'on' ? 1 : 0} type="checkbox"/> 记住我
					        </label>

					        <button type="button" onClick={this.handleSubmit} className="pure-button pure-button-primary">登录</button>
					    </fieldset>
					</form>
				</div>
				<div className="pure-u-1-3"></div>
			</div>
	      )
    }
}

//Login = Form.create()(Login);

function mapStateToProps(state, ownProps){
    return {
        LoginFetch: state.user.LoginFetch
    }
}

export default connect(mapStateToProps,{
 	startLogin
})(Login)