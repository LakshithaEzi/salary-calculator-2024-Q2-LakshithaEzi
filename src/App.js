import React from "react";
import "./App.css";
import SalaryForm from "./pages/SalaryForm";

function App() {
  return (
    <div className="App">
      <p className="p-2 text-3xl text-center text-black">
        Salary calculator
      </p>
      <SalaryForm />
    </div>
  );
}

export default App;
