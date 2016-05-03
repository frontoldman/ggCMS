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

    }

    listenHistory(route) {
    	const { changeUrl } = this.props;
    	browserHistory.listen(route => {
        	changeUrl(route.pathname)
        })
    }

    get navsData(){
        return [
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
                        url:"/user/admin"
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
    }

    getUrlByKey(key){

        let currentItem = null;
        function getItemInlis(data){
            if(Array.isArray(data) && !currentItem){
                data.forEach(item => {

                    if(item.key === key){
                        currentItem = item;
                        return;
                    }

                    if(item.nodes){
                        getItemInlis(item.nodes)
                    }

                    if(item.children){
                        getItemInlis(item.children)
                    }
                })
            }
        }

        getItemInlis(this.navsData);

        return currentItem;
    }

	handleClick(e) {
        const { key } = e;
        const item = this.getUrlByKey(key);

		browserHistory.push(item.url)
	}

	onToggle(info) {
        const { changeOpen } = this.props;
        changeOpen(info.open ? info.keyPath : info.keyPath.slice(1))
	}

	renderSubMenu(){

		function _render(data,type){

			if(Array.isArray(data)){
				var list = data.map(item => {
					if(type === 'subMenu' || !type){
						var title = (<span><Icon type={item.icon} /><span>{item.title}</span></span>)

                        if(item.nodes && item.children){
                            return (
                                <SubMenu url={item.url} key={item.key} title={title}>
                                    {_render(item.nodes,'item')}
                                    {_render(item.children,'subMenu')}
                                </SubMenu>
                            )
                        }else if(item.nodes){
                            return (
                                <SubMenu url={item.url} key={item.key} title={title}>
                                    {_render(item.nodes,'item')}
                                </SubMenu>
                            )
                        }else if(item.children){
                            return (
                                <SubMenu url={item.url} key={item.key} title={title}>
                                    {_render(item.children,'subMenu')}
                                </SubMenu>
                            )
                        }else{
                            return (
                                <SubMenu url={item.url} key={item.key} title={title}>
                                </SubMenu>
                            )
                        }

					}else if(type === 'item'){

						return (
							<Menu.Item url={item.url} key={item.key}>{item.title}</Menu.Item>
						)
					}
				})

                return list
			}
		}

		return _render(this.navsData)
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
