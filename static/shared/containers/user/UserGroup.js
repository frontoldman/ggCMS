/**
 * Created by 52913 on 2016/4/10.
 */

import React , { Component , PropTypes } from 'react'
import { Table, Button } from 'antd';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'


function handleSelectChange(value) { 
  console.log(`selected ${value}`);
}

class UserGroup extends Component {
    constructor(props) {
        super(props)
    }

    goToGroupCreate() {
        browserHistory.push('/user/group/create')
    }

    render() {
        const columns = [{
          title: '用户组名称',
          dataIndex: 'name',
          render(text) {
            return <a href="#">{text}</a>;
          }
        }, {
          title: '创建人',
          dataIndex: 'age'
        }, {
          title: '创建时间',
          dataIndex: 'address'
        }];

        const data = [];
        for (let i = 0; i < 46; i++) {
          data.push({
            key: i,
            name: `李大嘴${i}`,
            age: 32,
            address: `西湖区湖底公园${i}号`
          });
        }

        const pagination = {
          total: data.length,
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
                <Table columns={columns} dataSource={data} pagination={pagination} />
            </div>
        )
    }
}

export default connect()(UserGroup)