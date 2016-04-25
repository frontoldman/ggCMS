/**
 * Created by 52913 on 2016/4/20.
 */

import React, { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import { Row, Col, Menu, Icon } from 'antd'
import { changeUrl, changeOpen } from '../../actions/layout/'

const SubMenu = Menu.SubMenu;

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.listenHistory();

        // this.state = {
        //     openKeys: props.openKeys
        // }
    }

    listenHistory(route) {
    	const { changeUrl } = this.props;
    	browserHistory.listen(route => {
        	//changeUrl(route.pathname)
        })
    }

	handleClick(e) {
		browserHistory.push('/user/')
	}

	onToggle(info) {
        const { changeOpen } = this.props;
       // changeOpen(info.keyPath)
        changeOpen(info.open ? info.keyPath : info.keyPath.slice(1))
	}

	renderSubMenu(){

		const navsData = [
    		{
    			key:"sub1",
    			icon:'user',
    			title:'用户管理',
                url:'/user/',
    			nodes:[
    				{
    					key:"1",
    					title:"用户组管理",
    					url:"/user/group"
    				},
    				{
    					key:"2",
    					title:"用户管理",
    					url:"/user/"
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
		    				}
		    			]
    				}
    			]
    		},
    		{
    			key:"sub3",
    			icon:'appstore',
    			title:'导航三',
                nodes:[
                            {
                                key:"10",
                                title:"导航二一",
                                url:""
                            }
                        ]
    		}
    	]

		function _render(data,type){

			if(Array.isArray(data)){
				var list = data.map(item => {
					if(type === 'subMenu' || !type){
						var title = (<span><Icon type={item.icon} /><span>{item.title}</span></span>)

						return (
								<SubMenu key={item.key} title={title}>
									{_render(item.nodes,'item')}
									{_render(item.children,'subMenu')}
								</SubMenu>
							)
                            
					}else if(type === 'item'){

						return (
							<Menu.Item key={item.key}>{item.title}</Menu.Item>
						)
					}
				})

                return list
			}
		}

		return _render(navsData)
	}

    render() {
    	const { changeUrl, current, openKeys } = this.props;
      //  const { openKeys } = this.state;

        console.log(openKeys)

       // const openKeys = [];

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
	const { setUrl, setOpenKeys } = state.layout;



    return {
        current:setUrl.current,
        openKeys:setOpenKeys.openKeys
    }
}

export default connect(mapStateToProps,{
	changeUrl,
    changeOpen
})(NavBar)
