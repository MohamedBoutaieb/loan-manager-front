import React, { useEffect } from "react";
import { Alert, Divider, List, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../config/store";
import { getLoanStatus } from "../../config/reducers/loanRequest.reducer";
const LoanReview = () => {
  const dispatch = useAppDispatch();

  const loanRequest = useAppSelector((state) => state.loanRequest);
  const start = new Date(Number(loanRequest.loanStatus.startDate)).toISOString().slice(0, 10);
  const end = new Date(Number(loanRequest.loanStatus.endDate)).toISOString().slice(0, 10);
  useEffect(() => {
    dispatch(getLoanStatus(loanRequest.loanStatus.id));
  }, []);
  const data = [
    <div>
      {loanRequest.loanStatus.lastName},{loanRequest.loanStatus.firstName}{" "}
    </div>,
    <div>amount : {loanRequest.loanStatus.amount} </div>,
    <div>from : {start.toString()} </div>,

    <div>to : {end.toString()}</div>,
    <div>
      status: {loanRequest.loanStatus.state === 1 ? "accepted" : "rejected"}
    </div>,
  ];
  function DateTimeToDate( dateTimeString: any ) {
    const date = new Date(dateTimeString);
    const isoDate = date.toISOString();
    const dateString = isoDate.slice(0, 10);
    return <div>{dateString}</div>;
  }
  return (
    <div>
      <Divider orientation="left">Your Loan Status</Divider>
      <List
        header={<div>{loanRequest.loanStatus.id}</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark></Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default LoanReview;
