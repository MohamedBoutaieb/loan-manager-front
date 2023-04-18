import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { LoanManager } from "./components/loanManager/loanManager";
import LoanResult from "./components/loanResult/LoanResult";
import  LoanReview  from "./components/loanReview/loanReview";
import { useHistory } from "react-router-dom";
const App = () => {
  const history = useHistory();
  if (history.location.pathname === "/") {
    history.push("/loanForm");
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/loanForm" exact component={LoanManager} />
          <Route path="/loanResult" exact component={LoanResult} />
          <Route path="/loanReview" exact component={LoanReview} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
