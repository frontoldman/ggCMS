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

	renderSubMenu(){

		const navsData = [
    		{
    			key:"sub1",
    			icon:'user',
    			title:'用户管理',
    			nodes:[
    				{
    					key:"1",
    					title:"用户组管理",
    					url:""
    				},
    				{
    					key:"2",
    					title:"用户管理",
    					url:""
    				}
    			],
    			children:[
    				{
    					key:'sub2',
    					icon:'appstore',
    					title:'导航二',
    					nodes:[
		    				{
		    					key:"4",
		    					title:"导航二一",
		    					url:""
		    				},
		    				{
		    					key:"5",
		    					title:"导航二而",
		    					url:""
		    				}
		    			]
    				}
    			]
    		},
    		{
    			key:"sub3",
    			icon:'appstore',
    			title:'导航三'
    		}
    	]

		function _render(data,type){
			if(Array.isArray(data)){
				return data.map(item => {
					if(type === 'subMenu' || !type){
						var title = (<span><Icon type={item.icon} /><span>{item.title}</span></span>)

						return (
								<SubMenu key={item.key} title={title}>
									{item.nodes ? _render(item.nodes,'item'):''}
									{item.children ? _render(item.children,'subMenu'):''}
								</SubMenu>
							)
					}else if(type === 'item'){
						return (
							<Menu.Item key={item.key}>{item.title}</Menu.Item>
						)
					}
				})
			}
		}

		return _render(navsData)
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
			        {this.renderSubMenu()}
			      </Menu>
            </aside>
           </div>
        )
    }
}


function mapStateToProps(state, ownProps){
	const setUrl = state.layout.setUrl;

    return {
        current:setUrl.current,
        openKeys:setUrl.openKeys
    }
}

export default connect(mapStateToProps,{
	changeUrl
})(NavBar)
