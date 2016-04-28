/**
 * Created by 52913 on 2016/4/10.
 */

import React , { Component , PropTypes } from 'react'
import { Table, Button } from 'antd';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { getList } from '../../actions/user/group'
import { timeFormat } from '../../util/timer'


class UserGroup extends Component {
    constructor(props) {
        super(props)
    }

    goToGroupCreate() {
        browserHistory.push('/user/group/create')
    }

    componentDidMount() {
      const { getList } = this.props
      getList();
    }

    render() {

        const { data } = this.props;
        const list = data.list;

        list.forEach(item => item.key = item._id)

        const columns = [{
          title: '用户组名称',
          dataIndex: 'name',
          render(text, item) {
            const link = `/user/group/${item._id}`
            return <a href={link}>{text}</a>;
          }
        }, {
          title: '创建人',
        }, {
          title: '创建时间',
          dataIndex: 'createTime',
          render(timeString) {
            return timeFormat(timeString)
          }
        },{
          title:'操作',
          render(text,item) {
            const editLink = `/user/group/edit/${item._id}`; 
            return (
              <div>
                <Button onClick={()=>browserHistory.push(editLink)} type="primary">编辑</Button>
                &nbsp;&nbsp;
                <Button onClick={()=>browserHistory.push(deleteLink)} type="primary" style={{backgroundColor:'red',borderColor:'red'}}>删除</Button>
              </div>
            )
          }
        }];

        const pagination = {
          total: list.length,
          showSizeChanger: true,
          onShowSizeChange(current, pageSize) {
            console.log('Current: ', current, '; PageSize: ', pageSize);
          },
          onChange(current) {
            console.log('Current: ', current);
          }
        };

        return ( 
            <div>
                <Button onClick={this.goToGroupCreate} type="primary" size="large">添加用户组</Button>
                <br />
                <br />
                <Table columns={columns} dataSource={list} pagination={pagination} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        data: state.userGroup.listFetch
    }
}

export default connect(mapStateToProps,{
  getList
})(UserGroup)