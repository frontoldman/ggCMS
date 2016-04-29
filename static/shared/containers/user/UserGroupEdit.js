/**
 * Created by 52913 on 2016/4/10.
 */

import React , { Component , PropTypes } from 'react'
import { Form, Input, Select, Checkbox, Radio, Button } from 'antd';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { 
    startAdd, 
    startEdit, 
    addSuccess, 
    getGroupDetail,
    resetGroupStatus } from '../../actions/user/group'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class UserGroupEdit extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleSubmit(e) { 
      e.preventDefault(); 
      const { startAdd, route, routeParams, startEdit } = this.props;
      const fields = this.props.form.getFieldsValue();
      if(route.name === 'UserGroupEdit'){
        startEdit(fields,routeParams.id)
      }else{
        startAdd(fields);
      }
    }

    componentDidMount (props) {
      const { route, routeParams, getGroupDetail } = this.props;
      if(route.name === 'UserGroupEdit'){
        getGroupDetail(routeParams.id);
      }
    }

    componentWillReceiveProps(nextProps) {
      const { resetGroupStatus } = this.props;
      if(nextProps.fetch.data){
        resetGroupStatus();
        browserHistory.push('/user/group');
      }
    }

    render() {
        const { getFieldProps } = this.props.form;
        const { fetch, detailFetch } = this.props;

        return (
             <Form horizontal onSubmit={this.handleSubmit}>
              <FormItem
                id="control-input"
                label="输入用户组名称："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}>
                <Input id="control-input" {...getFieldProps('name')} defaultValue="hi" placeholder="Please enter..." />
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
  const name = detail.data ? detail.data.name : ''

  return {
    name:{value: name}
  }
}

UserGroupEdit = Form.create({
  mapPropsToFields
})(UserGroupEdit);

function mapStateToProps(state, ownProps){
    return {
        fetch: state.userGroup.editFetch,
        detail: state.userGroup.detailFetch
    }
}

export default connect(mapStateToProps,{
  startAdd,
  addSuccess,
  getGroupDetail,
  startEdit,
  resetGroupStatus
})(UserGroupEdit)