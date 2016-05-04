/**
 * Created by 52913 on 2016/4/20.
 */

import React, { Component , PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

 class Login extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
    	e.preventDefault();
    }

    render() {
        const { getFieldProps } = this.props.form;
	    const formItemLayout = {
	      labelCol: { span: 10 },
	      wrapperCol: { span: 4 },
	    };

	    return (
	      <Form horizontal onSubmit={this.handleSubmit} style={{marginTop:200}}>
	        <FormItem
	          {...formItemLayout}
	          label="用户名：">
	          <Input type="text" {...getFieldProps('name')} placeholder="请输入账户名称" />
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="密码：">
	          <Input type="password" {...getFieldProps('pass')} placeholder="请输入密码" />
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="记住用户">
	          <label>
	            <Checkbox {...getFieldProps('agreement')} /> 同意
	          </label>
	        </FormItem>
	        <FormItem wrapperCol={{ span: 4, offset: 10 }} style={{ marginTop: 24 }}>
	          <Button type="primary" htmlType="submit">登陆</Button>
	        </FormItem>
	      </Form>
	      )
    }
}

Login = Form.create()(Login);

function mapStateToProps(state, ownProps){

    return {
        
    }
}

export default connect(mapStateToProps,{
 
})(Login)