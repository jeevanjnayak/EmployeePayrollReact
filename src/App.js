import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';
import PayrollHome from "./components/payrollForm/PayrollHome";
import PayrollForm from "./components/payrollForm/PayrollForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<PayrollHome />} />
            <Route path="/add" element={<PayrollForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;