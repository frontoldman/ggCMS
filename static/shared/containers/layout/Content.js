/**
 * Created by 52913 on 2016/4/20.
 */

import React, { Component , PropTypes } from 'react'
import { Row, Col, Breadcrumb } from 'antd'
import { connect } from 'react-redux'

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    	const { children, loginFetch} = this.props;

    	const avStyle = {
    		textAlign: 'right',
    		paddingTop: '20px',
    		cursor: 'pointer'
    	}

        return (
              <div className="ant-layout-main">
		        <div className="ant-layout-header">
					<Row>
					  <Col span="4" offset="19" style={{...avStyle}}>
					  	{loginFetch.data && loginFetch.data.name}
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

export default connect(mapStateToProps,{})(Content)
