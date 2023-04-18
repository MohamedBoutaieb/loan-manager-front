import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const LoanUpdates = (props: any) => {
  const history = useHistory();
  const x = props.loanRequest;

  return (
    <Modal
      title="You have updates concerning your loan"
      open={true}
      okText={"Check Bank Response"}
      cancelText={"Close"}
      onCancel={() => history.push("/loanForm")}
      onOk={() => history.push("/loanReview")}
    >
      <Space style={{ display: "flex", justifyContent: "space-between" }}>
        <div> Loan Id </div> <div> {props.data.id} </div>
      </Space>
      <Space style={{ display: "flex", justifyContent: "space-between" }}>
        <div> Amount </div> <div> {props.data.amount} </div>
      </Space>
      <Space style={{ display: "flex", justifyContent: "space-between" }}>
        <div> Email </div> <div> {props.data.email} </div>
      </Space>
    </Modal>
  );
};
export default LoanUpdates;
