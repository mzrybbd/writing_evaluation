import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';
import React, { Component } from 'react';
const { TextArea } = Input
const { Option } = Select

export const WriteForm = Form.create({ name: 'update_form' })(

  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        arcitleType: ['记叙文', '说明文', '议论文', '应用文'],
        grade: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三'],
        confirmLoading: false
      }
    }

    render() {
      const { getFieldDecorator } = this.props.form
      const { grade, arcitleType } = this.state

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
          md: { span: 16 },
        },
      };

      const submitFormLayout = {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 10, offset: 8 },
        },
      };

      const grades = grade.map((item, index) =>
        <Option key={index} value={index + 1}>{item}</Option>
      );
      const arcitleTypes = arcitleType.map((item, index) =>
        <Option key={index} value={index + 1}>{item}</Option>
      )
      return (
        <Form {...formItemLayout} style={{margin: '0 auto'}}>
          <Form.Item label="年级">
            {getFieldDecorator('grade', {
              initialValue: '一年级',
              rules: [{ required: true, message: '请选择年级' }],
            })(
              <Select>
                {grades}
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="文体">
            {getFieldDecorator('arcitleType', {
              initialValue: '记叙文',
              rules: [{ required: true, message: '请选择文体' }],
            })(
              <Select>
                {arcitleTypes}
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="标题">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入作文题目' }, {
                max: 100,
                message: '题目不能超过100字符',
              },],
            })(<Input placeholder="输入作文标题" />)}
          </Form.Item>
          <Form.Item label="内容">
            {getFieldDecorator('content', {
               rules: [{ required: true, message: '请输入作文内容' }],
            })(
              <TextArea
                placeholder="输入作文内容"
                rows={10}
              />,
            )}
          </Form.Item>
          <Form.Item {...submitFormLayout}>
          <Button type="primary" onClick={this.state.updateTemplate} loading={this.state.confirmLoading}>
              开始批改
          </Button>
            <Button onClick={this.state.updateTemplate}>
              重置
          </Button>
          </Form.Item>
        </Form>
      );
    }
  },
);