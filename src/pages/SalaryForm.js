import React from "react";
import InputComponent from "../components/InputComponent";
import ResultComponent from "../components/ResultComponent";

const SalaryForm = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <InputComponent />
      <ResultComponent/>
    </div>
  );
};
export default SalaryForm;