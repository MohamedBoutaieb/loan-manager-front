import React from "react";
import { Button, Form, Input, InputNumber, DatePicker } from "antd";
import "./loanManager.scss";
import dayjs from "dayjs";
import { useAppDispatch } from "../../config/store";
import { requestLoan } from "../../config/reducers/loanRequest.reducer";
import { useHistory  } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

export const LoanManager = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const onFinish = (values: any) => {
  
    const obj = {
      ...values["user"],
    };
    const now = dayjs();
    obj["startDate"] = Date.parse(
      obj["startDate"].format("YYYY-MM-DD HH:mm:ss")
    );
    obj["creationDate"] = Date.parse(now.format("YYYY-MM-DD HH:mm:ss"));
    obj["endDate"] = Date.parse(obj["endDate"].format("YYYY-MM-DD HH:mm:ss"));

    dispatch(requestLoan(obj));
    history.push('/loanResult');
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "firstName"]}
        label="First Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "lastName"]}
        label="last Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "amount"]}
        label="amount"
        rules={[{ type: "number", min: 1 }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item name={["user", "currency"]} label="currency">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "startDate"]} label="startDate">
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
      <Form.Item name={["user", "endDate"]} label="endDate">
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>

      <Form.Item
        name={["user", "yearlyIncome"]}
        label="yearlyIncome"
        rules={[{ type: "number", min: 1 }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
