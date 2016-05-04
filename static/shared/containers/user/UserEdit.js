/**
 * Created by 52913 on 2016/4/10.
 */

import React , { Component , PropTypes } from 'react'
import { 
  Form, 
  Input, 
  Select, 
  Checkbox, 
  Radio, 
  Button, 
  notification, 
  TreeSelect
} from 'antd';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { getList as getGroupList } from '../../actions/user/group'
import { startAdd, resetUserStatus, getUserDetail, startEdit } from '../../actions/user/user'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

const openNotificationWithIcon = function (type, message) {
    return notification[type]({
      message
    });
};

class UserEdit extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleSubmit(e) { 
      e.preventDefault(); 
      const { route, startAdd, startEdit, routeParams } = this.props;
      const fields = this.props.form.getFieldsValue();

      switch(route.name){
        case 'UserCreate':
          startAdd(fields)
        break;
        case 'UserEdit':
          startEdit(fields, routeParams.id)
        break;
      }
      
    }

    componentDidMount (props) {
      const { route, routeParams, getGroupList, getUserDetail } = this.props;
      switch(route.name){
        case 'UserCreate':
          getGroupList();
          break;
        case 'UserEdit':
          getGroupList();
          getUserDetail(routeParams.id);
          break;
      }
    }

    componentWillReceiveProps(nextProps) {
      const { route, resetUserStatus, getList } = this.props;

      //console.log(nextProps)

      if(nextProps.fetch.data){
        switch(route.name){
          case 'UserCreate':
            openNotificationWithIcon('success','添加成功')
            break;
          case 'UserEdit':
            openNotificationWithIcon('success','修改成功')
            break;
        }
     
        resetUserStatus();
        browserHistory.push('/user/admin');
      }
    }

    renderUserGroup() {
        const { getFieldProps, createControl } = this.props.form;
        const { groupList } = this.props;
        const options = groupList.map(item => (<Option key={item._id} value={item._id}>{item.name}</Option>))

        return (
            <Select id="control-select" {...getFieldProps('group')} 
              showSearch
              style={{ width: 200 }}
              placeholder="请选择人员用户组"
              optionFilterProp="children"
              notFoundContent="无法找到"
              searchPlaceholder="输入关键词">
              {options}
            </Select>
        )
    }

    render() {
        const { getFieldProps } = this.props.form;
        const { fetch } = this.props;

        return (
             <Form horizontal onSubmit={this.handleSubmit}>
              <FormItem
                id="control-input"
                label="输入用户名："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}>
                <Input id="control-input" {...getFieldProps('name')} placeholder="Please enter..." />
              </FormItem> 
              <FormItem
                id="control-select"
                label="选择用户组："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}>
                {this.renderUserGroup()}
              </FormItem> 

              <FormItem wrapperCol={{ span: 16, offset: 8 }} style={{ marginTop: 24 }}>
                <Button type="primary" loading={fetch.isFetching} htmlType="submit">保存</Button>
              </FormItem>
            </Form>

        )
    }
}

function mapPropsToFields(props){
  
  const { detail } = props;
  var name;
  var group;
  if(detail.data){
    name = detail.data.name;
    group = detail.data.group;
  }

  return {
    name: {value: name},
    group: {value: group} 
  }
}

function onFieldsChange(props, fields){
  console.log(fields)
}

UserEdit = Form.create({
  mapPropsToFields
})(UserEdit);

function mapStateToProps(state, ownProps){

    return {
        groupList: state.userGroup.listFetch.list,
        fetch: state.user.editFetch,
        detail: state.user.detailFetch
    }
}

export default connect(mapStateToProps,{
  getGroupList,
  startAdd,
  resetUserStatus,
  getUserDetail,
  startEdit
})(UserEdit)