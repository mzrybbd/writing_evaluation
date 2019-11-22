import { Button, Form, Input, Select, message, Upload, Icon } from "antd";
import axios from "axios";
import React, { Component } from "react";
import History from "./history";
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
    }
    handleEvaluation = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          let formData = new FormData();
          formData.append("vendor", "gaosieduTest");
          formData.append("vendorKey", "seGOD0633E141dJYUdC");
          formData.append("grade", values.grade.toString());
          formData.append("arcitleType", values.arcitleType.toString());
          formData.append("content", values.content);
          formData.append("title", values.title);

          axios({
            url: "/vendorEvaluationAction_evaluation",
            method: "POST",
            data: formData
          }).then(res => {
            if (res.data.success && res.data.code === "000") {
              Object.keys(values).forEach(item => {
                sessionStorage.setItem(item, values[item]);
              });
              // History.push({'pathname': '/evaluation'});
              History.push("/evaluation");
              // createBrowserHistory().push()
              // window.location.href = "http://10.38.4.74:3000/evaluation"
              // return <Redirect to="/evaluation" />
              // return <Link to="/evaluation"></Link>
              // Route.push('/evaluation')
              // return <Redirect to={{ pathname: "/evaluation" }} />
              // this.props.push('/evaluation')
              // browserHistory.push('/evaluation')
              // this.props.history.push('/evaluation');
            } else {
              message.error(res.data.message);
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
        url: "/ocrGatewayAction_ocr",
        method: "POST",
        data: formData
      }).then(res => {
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
          console.log(form.getFieldValue("content"));
        } else {
          message.error(res.data.message);
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
            formData.append("vendor", "gaosieduTest");
            formData.append("vendorKey", "seGOD0633E141dJYUdC");
            // message.loading("图片文字识别中", 2);
            message.loading(
              "图片文字识别中...",
              2,
              handleOcr( formData, form)
            );
            // axios({
            //   url: "/ocrGatewayAction_ocr",
            //   method: "POST",
            //   data: formData
            // }).then(res => {
            //   if (res.data.success && res.data.code === "000") {
            //     message.success("识别成功！");
            //     form.setFieldsValue({
            //       title:
            //         (form.getFieldValue("title")
            //           ? form.getFieldValue("title")
            //           : "") || res.data.title
            //     });
            //     form.setFieldsValue({
            //       content:
            //         (form.getFieldValue("content")
            //           ? form.getFieldValue("content")
            //           : "") + res.data.content || ""
            //     });
            //   } else {
            //     message.error(res.data.message);
            //   }
            // });
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
      const arcitleTypes = arcitleType.map((item, index) => (
        <Option key={index} value={index + 1}>
          {item}
        </Option>
      ));
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
