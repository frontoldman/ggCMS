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
      const {  route } = this.props;
      const fields = this.props.form.getFieldsValue();
      console.log(fields)
    }

    componentDidMount (props) {
      const { route, routeParams, getGroupList } = this.props;
      switch(route.name){
        case 'UserCreate':
          getGroupList();
          break;
        case 'UserEdit':
          break;
      }
    }

    componentWillReceiveProps(nextProps) {
      const { route, resetGroupStatus, getList } = this.props;
      if(nextProps.fetch.data){
        if(route.name === 'UserGroupEdit'){
          //openNotificationWithIcon('success','修改成功')
        }else{
          //openNotificationWithIcon('success','添加成功')
        }
        //resetGroupStatus();
        //browserHistory.push('/user/group');
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

        const { groupList } = this.props;
        const options = groupList.map(item => (<Option key={item._id} value={item._id}>{item.name}</Option>))

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
  mapPropsToFields,
  onFieldsChange
})(UserEdit);

function mapStateToProps(state, ownProps){
    return {
        groupList: state.userGroup.listFetch.list,
        fetch: {isFetching:false},
        detail: {}
    }
}

export default connect(mapStateToProps,{
  getGroupList
})(UserEdit)