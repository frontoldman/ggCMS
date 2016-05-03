/**
 * Created by 52913 on 2016/4/10.
 */

import React , { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { Table, Button, notification, Popconfirm} from 'antd';
import { Link, browserHistory } from 'react-router'
import { timeFormat } from '../../util/timer'


class UserPage extends Component { 
    constructor(props) {
        super(props)
    }

    render() {
        const self = this;
        const { userList } = this.props;

        userList.forEach(item => item.key = item._id)

        const columns = [{
          title: '用户昵称',
          dataIndex: 'name',
          render(text, item) {
            const link = `/user/group/${item._id}`
            return <a href={link}>{text}</a>;
          }
        }, {
          title: '所属用户组'
        },{
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
                <Button onClick={() => browserHistory.push(editLink)} type="primary">编辑</Button>
                &nbsp;&nbsp;
                <Popconfirm title="确定要删除这个用户组吗？" onConfirm={() => self.deleteById(item._id)}>
                      <Button type="primary" style={{backgroundColor:'red',borderColor:'red'}}>删除</Button>
                </Popconfirm>
              </div>
            )
          }
        }];

        const pagination = {
          total: userList.length,
          showSizeChanger: true,
          onShowSizeChange(current, pageSize) {
            //console.log('Current: ', current, '; PageSize: ', pageSize);
          },
          onChange(current) {
            //console.log('Current: ', current);
          }
        };

        return ( 
            <div>
                <Button onClick={() => browserHistory.push('/user/admin/create')} type="primary" size="large">添加用户组</Button>
                <br />
                <br />
                <Table columns={columns} dataSource={userList} pagination={pagination} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        userList: []
    }
}

export default connect(mapStateToProps, {
    
})(UserPage)