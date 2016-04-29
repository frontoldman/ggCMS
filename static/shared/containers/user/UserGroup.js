/**
 * Created by 52913 on 2016/4/10.
 */

import React , { Component , PropTypes } from 'react'
import { Table, Button, notification, Popconfirm} from 'antd';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { getList, startDelete, resetDeleteStatus } from '../../actions/user/group'
import { timeFormat } from '../../util/timer'

const openNotificationWithIcon = function (type, message) {
    return notification[type]({
      message
    });
};

class UserGroup extends Component {
    constructor(props) {
        super(props)
        this.deleteById = this.deleteById.bind(this);
    }

    goToGroupCreate() {
        browserHistory.push('/user/group/create')
    }

    deleteById(id) {
      const { startDelete } = this.props;
      startDelete(id);
    }



    componentWillReceiveProps(nextProps) {
      const { resetDeleteStatus, getList } = this.props;
      switch(nextProps.deleteStatus.deletingStatus){
        case 0:
            openNotificationWithIcon('info', '正在删除。。。');
          break;
        case 1:
            openNotificationWithIcon('success', '删除成功');
            resetDeleteStatus();
            getList();
          break;
      }
    }

    componentDidMount() {
      const { getList } = this.props
      getList();
    }



    render() {
        const self = this;
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
        data: state.userGroup.listFetch,
        deleteStatus: state.userGroup.deleteFetch
    }
}

export default connect(mapStateToProps,{
  getList,
  startDelete,
  resetDeleteStatus
})(UserGroup)