/**
 * Created by 52913 on 2016/4/20.
 */

import React, { Component , PropTypes } from 'react'
import { Row, Col, Breadcrumb, Menu, Dropdown, Icon } from 'antd'
import { connect } from 'react-redux'
import { startLogOut } from '../../actions/user/user'

class Content extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(item) {
    	const { startLogOut } = this.props;
    	switch(item.key){
    		case '0':
    			break;
    		case '1':
    			startLogOut();
    			break;
    	}
    	
    }

    render() {
    	const { children, loginFetch} = this.props;

    	const avStyle = {
    		textAlign: 'right',
    		paddingTop: '20px',
    		cursor: 'pointer'
    	}

    	const menu = (
		  <Menu onSelect={this.logout}>
		    <Menu.Item key="0">
		      <a href="http://www.alipay.com/">修改个人资料</a>
		    </Menu.Item>
		    <Menu.Divider />
		    <Menu.Item key="1" >退出登陆</Menu.Item>
		  </Menu>
		);

        return (
              <div className="ant-layout-main">
		        <div className="ant-layout-header">
					<Row>
					  <Col span="4" offset="19" style={{...avStyle}}>
					  	<Dropdown overlay={menu} trigger={['click']}>
						    <a className="ant-dropdown-link" href="#">
						      {loginFetch.data && loginFetch.data.nickname}
						       <Icon style={{marginLeft: '10px'}} type="down" />
						    </a>
						</Dropdown>
					  </Col>
					</Row>
		        </div>
		        <div className="ant-layout-breadcrumb">
		          <Breadcrumb>
		            <Breadcrumb.Item>首页</Breadcrumb.Item>
		            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
		            <Breadcrumb.Item>某应用</Breadcrumb.Item>
		          </Breadcrumb>
		        </div>
		        <div className="ant-layout-container">
		          <div className="ant-layout-content">
		            <div style={{ height: 590 }}>
		              {children}
		            </div>
		          </div>
		        </div>
		     </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        loginFetch: state.user.LoginFetch
    }
}

export default connect(mapStateToProps,{
	startLogOut
})(Content)
