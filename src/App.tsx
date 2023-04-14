import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { LoanManager } from './components/loanManager/loanManager';
import LoanResult from './components/loanResult/LoanResult';

function App() {
  return (
    <div className="App">
         <Router>
      <Switch>
        <Route path="/loanForm" exact component={LoanManager} />
        <Route path="/loanResult" exact component={LoanResult} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
