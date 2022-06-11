import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/payrollForm/PayrollHome";
import Add from "./components/payrollForm/PayrollForm";

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;