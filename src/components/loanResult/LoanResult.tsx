import React, { useEffect } from "react";

import { requestLoan } from "../../config/reducers/loanRequest.reducer";
import { useAppDispatch, useAppSelector } from "../../config/store";

const LoanResult = () => {
  const requestData = { amount: 1000, duration: 12 };
  const loanRequest = useAppSelector(state => state.loanRequest);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestLoan(requestData));
  }, []);

  if (loanRequest.loading) {
    return <div>Loading...</div>;
  }

  if (loanRequest.error) {
    return <div>Error: An error has occurred</div>;
  }

  return (
    <div>
      <h1>Loan Request Details</h1>
      <p>Amount: {loanRequest.loanStatus}</p>
    </div>
  );
};

export default LoanResult;
