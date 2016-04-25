/**
 * Created by 52913 on 2016/4/20.
 */

import React, { Component , PropTypes } from 'react'
import { Row, Col, Breadcrumb } from 'antd'

export default class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    	const { children } = this.props;

        return (
              <div className="ant-layout-main">
		        <div className="ant-layout-header"></div>
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
		        <div className="ant-layout-footer">
		        Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
		        </div>
		     </div>
        )
    }
}