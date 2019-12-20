import { Button, Form, Input, message, Upload, Icon } from 'antd';
import axios from 'axios';
import React, { Component } from 'react';
import History from '../history';
import Utils from '../utils/utils';
import './index.css'

class AILogin extends Component {
  constructor() {
    super();
    this.state = {
      confirmLoading: false,
      liked: false,
      status: 0,
      count: 60,
      numStatus: false,
      codeStatus: false,
      loginDisabled: false,
    };
  }
  hanledLogin() {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        this.setState({ confirmLoading: true });
        const data = Utils.smsCode('ailab.mvp.chineseComposition.login');
        data.bizContent.phoneNum = values.phoneNum;
        data.bizContent.code = values.code;
        await axios({
          url: `/api`,
          method: 'POST',
          data: data,
        }).then(response => {
          let res = response.data;
          if (res.code === 2000) {
            Utils.setCookie({ ai_token: res.data }, 1);
            History.push('/');
          } else {
            message.error(res.msg);
          }
          this.setState({ confirmLoading: false });
        });
      }
    });
  }
  getCode = async () => {
    this.props.form.validateFields(['phoneNum'], async (err, values) => {
      if (!err) {
        const data = Utils.smsCode('ailab.mvp.chineseComposition.sms');
        data.bizContent.phoneNum = values.phoneNum;
        await axios({
          url: `/api`,
          method: 'POST',
          data: data,
        }).then(response => {
          let res = response.data;
          if (res.code === 2000) {
            message.success('发送成功！');
            this.setState({ liked: true, status: 1 });
            setTimeout(() => this.countDown(), 1000);
          } else {
            message.error(res.msg);
          }
        });
      }
    });
  };
  //倒计时
  countDown() {
    const { count } = this.state;
    if (count === 1) {
      //当为0的时候，liked设置为true，button按钮显示内容为 获取验证码
      this.setState({
        count: 60,
        liked: true,
        status: 2,
      });
    } else {
      this.setState({
        count: count - 1,
        liked: false,
      });
      setTimeout(() => this.countDown(), 1000); //每一秒调用一次
    }
  }
  phoneNumChange = e => {
    const { value } = e.target;
    // const reg = /^1([0-9]*)?$/;		// 以数字1开头，任意数字结尾，且中间出现零个或多个数字
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/; // 以数字1开头，任意数字结尾，且中间出现零个或多个数字
    if (reg.test(value)) {
      this.setState({
        liked: true,
        numStatus: true,
      });
    } else {
      this.setState({
        liked: false,
        numStatus: false,
      });
    }
  };
  codeChange = e => {
    const { value } = e.target;
    const reg = /^[0-9]{6}$/;
    if (reg.test(value)) {
      this.setState({
        codeStatus: true,
      });
    } else {
      this.setState({
        codeStatus: false,
      });
    }
  };
  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 24 },
        md: { span: 5 },
      },
      wrapperCol: {
        sm: { span: 24 },
        md: { span: 16 },
      },
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-box">
        <Form style={{ margin: '0 auto' }}>
          <Form.Item>
            <>
               <h1 style={{fontSize: '22px', lineHeight: 0, textAlign: 'center',color: 'rgb(44, 62, 80)'}}>爱学习语文作文批改系统</h1></>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('phoneNum', {
              rules: [
                { required: true, message: '请输入手机号码' },
                // { pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '请输入正确的手机号'}
              ],
            })(<Input placeholder="请输入手机号码" onChange={this.phoneNumChange}></Input>)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('code', {
              rules: [{ required: true, message: '请输入验证码' }],
            })(
              <Input
                placeholder="请输入验证码"
                onChange={this.codeChange}
                addonAfter={
                  <Button
                    type="link"
                    //判断如果点击了获取验证码，就让button按钮上显示 *秒后重发送 并且button设置为disabled
                    disabled={this.state.liked ? false : true}
                    onClick={() => this.getCode()} //点击此按钮获取验证码
                  >
                    {this.state.status === 0 && '获取验证码'}
                    {this.state.status === 1 && `（${this.state.count}）秒后重发`}
                    {this.state.status === 2 && '重新发送'}
                  </Button>
                }
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              onClick={this.hanledLogin.bind(this)}
              loading={this.state.confirmLoading}
              style={{ width: '100%' }}
              disabled={!(this.state.numStatus && this.state.codeStatus)}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Form.create()(AILogin);
