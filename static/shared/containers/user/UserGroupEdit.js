/**
 * Created by 52913 on 2016/4/10.
 */

import React , { Component , PropTypes } from 'react'
import { Form, Input, Select, Checkbox, Radio, Button } from 'antd';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { startAdd, addSuccess } from '../../actions/user/group'

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
      const { startAdd } = this.props;
      const fields = this.props.form.getFieldsValue();
      startAdd(fields);
      
    }

    render() {
        const { getFieldProps } = this.props.form;
        const { fetch } = this.props;

        console.log(fetch)

        return (
             <Form horizontal onSubmit={this.handleSubmit}>
              <FormItem
                id="control-input"
                label="输入用户组名称："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}>
                <Input id="control-input" {...getFieldProps('name')} placeholder="Please enter..." />
              </FormItem> 

              <FormItem wrapperCol={{ span: 16, offset: 8 }} style={{ marginTop: 24 }}>
                <Button type="primary" loading={fetch.isFetching} htmlType="submit">保存</Button>
              </FormItem>
             
            </Form>

        )
    }
}

UserGroupEdit = Form.create()(UserGroupEdit);

function mapStateToProps(state, ownProps){
    return {
        fetch: state.userGroup.fetch
    }
}

export default connect(mapStateToProps,{
  startAdd,
  addSuccess
})(UserGroupEdit)