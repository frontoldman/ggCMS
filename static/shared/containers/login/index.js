/**
 * Created by 52913 on 2016/4/20.
 */

import React, { Component , PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';
import openNotificationWithIcon from '../../util/openNotificationWithIcon'
import { startLogin } from '../../actions/user/user'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

 class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
    	e.preventDefault(); 
      	const fields = this.props.form.getFieldsValue();
      	console.log(fields)

      	this.props.startLogin(fields)
    }

    componentWillReceiveProps(nextProps) {
      const { LoginFetch } = nextProps;

      switch(LoginFetch.loginStatus){
      	case 1:
      		openNotificationWithIcon('success','登陆成功')
      		break;
      	case -1:
      		break;
      }
	}

    render() {
        const { getFieldProps } = this.props.form;
        const { LoginFetch } = this.props;
	    const formItemLayout = {
	      labelCol: { span: 10 },
	      wrapperCol: { span: 4 },
	    };

	    return (
	      <Form horizontal onSubmit={this.handleSubmit} style={{marginTop:200}}>
	        <FormItem
	          {...formItemLayout}
	          label="用户名：">
	          <Input type="text" {...getFieldProps('username')} placeholder="请输入账户名称" />
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="密码：">
	          <Input type="password" {...getFieldProps('password')} placeholder="请输入密码" />
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="记住用户">
	          <label>
	            <Checkbox {...getFieldProps('agreement')} /> 同意
	          </label>
	        </FormItem>
	        <FormItem wrapperCol={{ span: 4, offset: 10 }} style={{ marginTop: 24 }}>
	          <Button type="primary" loading={LoginFetch.isFetching} htmlType="submit">登陆</Button>
	        </FormItem>
	      </Form>
	      )
    }
}

Login = Form.create()(Login);

function mapStateToProps(state, ownProps){
    return {
        LoginFetch: state.user.LoginFetch
    }
}

export default connect(mapStateToProps,{
 	startLogin
})(Login)