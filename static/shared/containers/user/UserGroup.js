/**
 * Created by 52913 on 2016/4/10.
 */

import React , { Component , PropTypes } from 'react'
import { Table } from 'antd';
import { connect } from 'react-redux'


function handleSelectChange(value) { 
  console.log(`selected ${value}`);
}

class UserGroup extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const columns = [{
          title: '姓名',
          dataIndex: 'name',
          render(text) {
            return <a href="#">{text}</a>;
          }
        }, {
          title: '年龄',
          dataIndex: 'age'
        }, {
          title: '住址',
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
            <Table columns={columns} dataSource={data} pagination={pagination} />
        )
    }
}

export default connect()(UserGroup)