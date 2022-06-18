import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import './App.css';
import PayrollHome from "./components/payrollForm/PayrollHome";
import PayrollForm from "./components/payrollForm/PayrollForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/">
          <PayrollHome/>
          </Route>   

          <Route path="/add" >
          <PayrollForm />
          </Route >

          <Route exact path="/PayrollForm/:id" >
          <PayrollForm />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}
export default App;