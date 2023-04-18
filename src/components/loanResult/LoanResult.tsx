import React, { useEffect } from "react";

import { requestLoan } from "../../config/reducers/loanRequest.reducer";
import { useAppDispatch, useAppSelector } from "../../config/store";
import dayjs from "dayjs";
import LoanUpdates from "./checkLoanCard";
const LoanResult = () => {
  const requestData = {
    firstName: "John",
    lastName: "Doe",
    email: "a@mail.com",
    amount: 1000,
    creationDate: 111,
    startDate: 1555,
    endDate: 505,
    currency: "USD",
    yearlyIncome:2,
  }
  const loanRequest = useAppSelector(state => state.loanRequest);

  if (loanRequest.loading) {
    return <div>Loading...</div>;
  }

  if (loanRequest.error) {
    return <div>Error: An error has occurred</div>;
  }

  return (
    <div>
      <h1><LoanUpdates data = {loanRequest.loanStatus}/></h1>
      <p></p>
    </div>
  );
};

export default LoanResult;
