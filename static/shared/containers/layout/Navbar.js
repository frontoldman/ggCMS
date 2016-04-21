/**
 * Created by 52913 on 2016/4/20.
 */

import React, { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import { Row, Col, Menu, Icon } from 'antd'
import { changeUrl } from '../../actions/layout/'

const SubMenu = Menu.SubMenu;

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.onToggle = this.onToggle.bind(this);

        this.listenHistory();


    }

    listenHistory(route) {
    	const { changeUrl } = this.props;
    	browserHistory.listen(route => {
        	changeUrl(route.pathname)
        })
    }

	handleClick(e) {
		browserHistory.push('/user/')
	}

	onToggle(info) {
		this.setState({
		  openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
		});
	}

    render() {
    	const { changeUrl, current, openKeys } = this.props;

        return (
            <div className="ant-layout-aside">
		      <aside className="ant-layout-sider">
		        <div className="ant-layout-logo"></div>

            	 <Menu onClick={this.handleClick}
            	 	theme="dark"
			        openKeys={openKeys}
			        onOpen={this.onToggle}
			        onClose={this.onToggle}
			        selectedKeys={[current]}
			        mode="inline">
			        <SubMenu key="sub1" title={<span><Icon type="user" /><span>用户管理</span></span>}>
			          <Menu.Item key="1">用户组管理</Menu.Item>
			          <Menu.Item key="2">系统用户管理</Menu.Item>
			        </SubMenu>
			        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
			          <Menu.Item key="5">选项5</Menu.Item>
			          <Menu.Item key="6">选项6</Menu.Item>
			          <SubMenu key="sub3" title="三级导航">
			            <Menu.Item key="7">选项7</Menu.Item>
			            <Menu.Item key="8">选项8</Menu.Item>
			          </SubMenu>
			        </SubMenu>
			        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
			          <Menu.Item key="9">选项9</Menu.Item>
			          <Menu.Item key="10">选项10</Menu.Item>
			          <Menu.Item key="11">选项11</Menu.Item>
			          <Menu.Item key="12">选项12</Menu.Item>
			        </SubMenu>
			      </Menu>
            </aside>
           </div>
        )
    }
}


function mapStateToProps(state, ownProps){
	const setUrl = state.layout.setUrl;

    return {
    	routing:state.routing,
        current:setUrl.current,
        openKeys:setUrl.openKeys
    }
}

export default connect(mapStateToProps,{
	changeUrl
})(NavBar)
