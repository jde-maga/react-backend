import React, { Component } from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        axios.post('/login', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
        <Form onSubmit={this.handleSubmit} className="login-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(NormalLoginForm);
