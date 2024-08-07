import React from "react";
import "./App.css";
import SalaryForm from "./pages/SalaryForm";

function App() {
  return (
    <div className="App ">
      <p className="flex justify-center w-full p-2 mb-3 -mt-1 text-5xl font-bold text-center text-black font-tp">
        Salary calculator 2024
      </p>
      <SalaryForm />
    </div>
  );
}

export default App;
