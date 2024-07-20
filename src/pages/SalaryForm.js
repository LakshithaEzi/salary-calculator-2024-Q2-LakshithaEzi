import React from "react";
import InputComponent from "../components/InputComponent";
import ResultComponent from "../components/ResultComponent";

const SalaryForm = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:mx-auto lg:space-x-4 md:grid-col-2 ">
      <InputComponent />
      <ResultComponent/>
    </div>
  );
};
export default SalaryForm;