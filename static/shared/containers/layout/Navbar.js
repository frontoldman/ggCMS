/**
 * Created by 52913 on 2016/4/20.
 */

import React, { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu;

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
        	...props,
        	current: '1',
     		openKeys: []
        }

        this.handleClick = this.handleClick.bind(this);
        this.onToggle = this.onToggle.bind(this);
    }

	handleClick(e) {
		console.log('click ', e);
		this.setState({
		  current: e.key,
		  openKeys: e.keyPath.slice(1)
		});
	}

	onToggle(info) {
		this.setState({
		  openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
		});
	}

    render() {
    	// const { routeStatus } = this.props;

    	// console.log(routeStatus)

        return (
            <div className="ant-layout-aside">
		      <aside className="ant-layout-sider">
		        <div className="ant-layout-logo"></div>

            	 <Menu onClick={this.handleClick}
            	 	theme="dark"
			        openKeys={this.state.openKeys}
			        onOpen={this.onToggle}
			        onClose={this.onToggle}
			        selectedKeys={[this.state.current]}
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


export default connect()(NavBar)
//export default NavBar