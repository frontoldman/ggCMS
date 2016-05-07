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

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class ArticleEdit extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleSubmit(e) { 
      e.preventDefault(); 
      const { route, startAdd, startEdit, routeParams } = this.props;
      const fields = this.props.form.getFieldsValue();

      // switch(route.name){
      //   case 'UserCreate':
      //     startAdd(fields)
      //   break;
      //   case 'UserEdit':
      //     startEdit(fields, routeParams.id)
      //   break;
      // }
      
    }

    componentDidMount (props) {
      const { route, routeParams, getGroupList, getUserDetail } = this.props;
      // switch(route.name){
      //   case 'UserCreate':
      //     getGroupList();
      //     break;
      //   case 'UserEdit':
      //     getGroupList();
      //     getUserDetail(routeParams.id);
      //     break;
      // }
    }

    componentWillReceiveProps(nextProps) {
      const { route, resetUserStatus, getList } = this.props;

      //console.log(nextProps)

      // if(nextProps.fetch.data){
      //   switch(route.name){
      //     case 'UserCreate':
      //       openNotificationWithIcon('success','添加成功')
      //       break;
      //     case 'UserEdit':
      //       openNotificationWithIcon('success','修改成功')
      //       break;
      //   }
     
      //   resetUserStatus();
      //   browserHistory.push('/user/admin');
      // }
    }

   

    render() {
        const { getFieldProps } = this.props.form;

        return (
             <Form horizontal onSubmit={this.handleSubmit}>
              <FormItem
                id="control-input"
                label="输入文章名："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}>
                <Input id="control-input" {...getFieldProps('name')} placeholder="Please enter..." />
              </FormItem> 
              <FormItem
                id="control-input"
                label="输入文章内容："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}>
                <Input id="control-input" {...getFieldProps('nickname')} placeholder="Please enter..." />
              </FormItem> 
             

              <FormItem wrapperCol={{ span: 16, offset: 8 }} style={{ marginTop: 24 }}>
                <Button type="primary" loading={false} htmlType="submit">保存</Button>
              </FormItem>
            </Form>

        )
    }
}

function mapPropsToFields(props){
  
  const { detail } = props;
  var username;
  var group;
  var nickname;
  if(detail.data){
    username = detail.data.username;
    nickname = detail.data.nickname;
    group = detail.data.group;
  }

  return {
    username: {value: username},
    group: {value: group},
    nickname: {value: nickname}
  }
}

function onFieldsChange(props, fields){
  console.log(fields)
}

ArticleEdit = Form.create({
  //mapPropsToFields
})(ArticleEdit);

function mapStateToProps(state, ownProps){
    return {
        
    }
}

export default connect(mapStateToProps,{
  
})(ArticleEdit)