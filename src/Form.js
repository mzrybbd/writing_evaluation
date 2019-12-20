import { Button, Form, Input, Select, message, Upload, Icon } from "antd";
import axios from "axios";
import React, { Component } from "react";
import History from "./history";
import Utils from './utils/utils'

const { TextArea } = Input;
const { Option } = Select;

export const WriteForm = Form.create({ name: "update_form" })(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        arcitleType: ["记叙文", "说明文", "议论文", "应用文"],
        grade: [
          "一年级",
          "二年级",
          "三年级",
          "四年级",
          "五年级",
          "六年级",
          "初一",
          "初二",
          "初三",
          "高一",
          "高二",
          "高三"
        ],
        confirmLoading: false
      };
    }
    componentDidMount() {
      let { form } = this.props;
      form.setFieldsValue({
        title: sessionStorage.getItem("title") || "",
        content: sessionStorage.getItem("content") || "",
        grade: Number(sessionStorage.getItem("grade")) || 1,
        arcitleType: Number(sessionStorage.getItem("arcitleType")) || 1
      });
      window.addEventListener("load", () => {
        form.resetFields();
      });
      let obj = {
        "token":Utils.getCookie('ai_token'),
      }
      const data = Utils.smsCode('ailab.mvp.chineseComposition.login.status')
      data.bizContent = obj
      axios({
        url: `/api`,
        method: "POST",
        data: data
      }).then(response => {
        let res = response.data
        if (res.code !== 2000) {
          message.warning('请先登录')
          History.push("/login");
        }
      });
    }
    handleEvaluation = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.setState({confirmLoading: true})
          let formData = new FormData();
          formData.append("vendor", "gaosiedu");
          formData.append("vendorKey", "gsED12811sDk891fJULdE");
          formData.append("grade", values.grade.toString());
          formData.append("arcitleType", values.arcitleType.toString());
          formData.append("content", values.content);
          formData.append("title", values.title);
          let obj = {
            "token":Utils.getCookie('ai_token'),
            "articleType":values.arcitleType.toString() ,
            "grade": values.grade.toString(),
            "title": values.title,
            "content": values.content
          }
          const data = Utils.smsCode('ailab.mvp.chineseComposition.correction')
          data.bizContent = obj
          axios({
            url: `/vendorEvaluationAction_evaluation`,
            method: "POST",
            data: data
          }).then(response => {
            let res = response.data
            this.setState({confirmLoading: true})
            if (res.code === 2000) {
              if (res.data.success && res.data.code === "000") {
              Object.keys(values).forEach(item => {
                sessionStorage.setItem(item, values[item]);
              });
              History.push("/evaluation");
            }else{
              message.error(res.data.message);
            }
            } else {
              message.error(res.msg);
              if(res.code === 5000 && res.msg == 'token expired'){
                History.push('/login')
              }
            }
          });
        }
      });
    };

    handleReset = () => {
      this.props.form.resetFields();
    };

    handleOcr = (formData, form) => {
      axios({
        url: "/ocrGatewayAction_ocrjsonrequest",
        method: "POST",
        data: formData
      }).then(response => {
        let res = response.data
        if(res.code === 2000){
        if (res.data.success && res.data.code === "000") {
          message.success("识别成功！");
          form.setFieldsValue({
            title:
              (form.getFieldValue("title")
                ? form.getFieldValue("title")
                : "") || res.data.title
          });
          form.setFieldsValue({
            content:
              (form.getFieldValue("content")
                ? form.getFieldValue("content")
                : "") + res.data.content || ""
          });
        } else {
          message.error(res.data.message);
        }
        }else{
          message.error(res.msg);
          if(res.code === 5000 && res.msg == 'token expired'){
            History.push('/login')
          }
        }
      });
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      const { grade, arcitleType } = this.state;
      const { handleOcr } = this;
      const { form } = this.props;
      const fileprops = {
        accept: "image/*",
        method: "POST",
        name: "imageBase64",
        beforeUpload: file => {
          const isJpgOrPng =
            file.type === "image/jpeg" || file.type === "image/png";
          if (!isJpgOrPng) {
            message.error("只能上传PNG或JPG格式");
          }
          const isLt2M = file.size / 1024 / 1024 < 5;
          if (!isLt2M) {
            message.error("图片大小不能超过5M，建议在1M内");
          }
          return isJpgOrPng && isLt2M;
        },
        customRequest: info => {
          //手动上传
          var reader = new FileReader();
          const formData = new FormData();
          if (info.file) {
            reader.readAsDataURL(info.file);
          }
          let base64head = "";
          reader.onloadend = function(e) {
            base64head = reader.result;
            formData.append(
              "imageBase64",
              base64head.replace(/^data:image\/\w+;base64,/, "")
            ); //名字和后端接口名字对应
            // formData.append('url', 'https://storage.aixuexi.com/u/9dzMrFDE843');//名字和后端接口名字对应
            formData.append("vendor", "gaosieduOcr");
            formData.append("vendorKey", "gsdOU1916E881deiUao");
            let obj = {
              "token":Utils.getCookie('ai_token'),
              imageBase64: base64head.replace(/^data:image\/\w+;base64,/, "")
            }
            const data = Utils.smsCode('ailab.mvp.chineseComposition.ocr')
            data.bizContent = obj

            // message.loading("图片文字识别中", 2);
            message.loading(
              "图片文字识别中...",
              2,
              handleOcr(data, form)
            );
          };
        }
      };

      const formItemLayout = {
        labelCol: {
          sm: { span: 24 },
          md: { span: 5 }
        },
        wrapperCol: {
          sm: { span: 24 },
          md: { span: 16 }
        }
      };

      const submitFormLayout = {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 10, offset: 10 }
        }
      };

      const grades = grade.map((item, index) => (
        <Option key={index} value={index + 1}>
          {" "}
          {item}
        </Option>
      ));
      const arcitleTypes = arcitleType.map((item, index) => {
        let value = index > 0 ? index + 2 : index + 1
        return (
        <Option key={index} value={value}>
          {item}
        </Option>
      )});
      return (
        <Form {...formItemLayout} style={{ margin: "0 auto" }}>
          <Form.Item label="年级">
            {getFieldDecorator("grade", {
              initialValue: 1,
              rules: [{ required: true, message: "请选择年级" }]
            })(<Select>{grades}</Select>)}
          </Form.Item>
          <Form.Item label="文体">
            {getFieldDecorator("arcitleType", {
              initialValue: 1,
              rules: [{ required: true, message: "请选择文体" }]
            })(<Select>{arcitleTypes}</Select>)}
          </Form.Item>
          <Form.Item label="图片识别">
            {getFieldDecorator("file")(
              <Upload
                {...fileprops}
                fileList={this.state.fileList}
                key={Math.random()}
              >
                <Button>
                  <Icon type="upload" /> 上传
                </Button>
              </Upload>
            )}
          </Form.Item>
          <Form.Item label="标题">
            {getFieldDecorator("title", {
              rules: [
                { required: true, message: "请输入作文题目" },
                {
                  max: 100,
                  message: "题目不能超过100字符"
                }
              ]
            })(<Input placeholder="输入作文标题" />)}
          </Form.Item>
          <Form.Item label="内容">
            {getFieldDecorator("content", {
              rules: [{ required: true, message: "请输入作文内容" }]
            })(<TextArea placeholder="输入作文内容" rows={8} />)}
          </Form.Item>
          <Form.Item {...submitFormLayout}>
            <Button
              type="primary"
              onClick={this.handleEvaluation}
              loading={this.state.confirmLoading}
            >
              开始批改
            </Button>
            <Button onClick={this.handleReset} style={{ marginLeft: "15px" }}>
              重置
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
);
