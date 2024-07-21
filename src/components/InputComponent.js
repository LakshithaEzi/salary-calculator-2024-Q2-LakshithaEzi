import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBasicSalary,
  deleteEarning,
  deleteDeduction,
  reset,
} from "../redux/actions/salaryActions";
import { FaArrowRotateLeft, FaPlus } from "react-icons/fa6";
import RecordItem from "./RecordItem";
import EarningModal from "./Modal";
import { Type } from "../util";

const InputComponent = () => {
  const dispatch = useDispatch();
  const { basicSalary, earnings, deductions } = useSelector(
    (state) => state.salary
  );
  const [isModalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState("");

  const handleReset = () => {
    dispatch(reset());
  };

  const handleBasicSalaryChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      dispatch(updateBasicSalary(0));
    } else {
      const parsedValue = parseFloat(value);
      if (!isNaN(parsedValue)) {
        dispatch(updateBasicSalary(parsedValue));
      }
    }
  };

  return (
    <div
      className="p-6 border-2 rounded-lg bg-grey-100 "
      style={{
        borderColor: "#E0E0E0",
        width: "544px",
        height: "492.8px",
        background: "#D6DBE3",
        boxShadow: "0 4px 8px rgba(158, 104, 67,  0.3)",
        backdropFilter: "blur(5px)",
        
      }}
    >
      <div className="flex justify-between text-base font-tp">
        <h1 className="mb-4 text-xl font-bold text-black fill-orange-100">
          Calculate Your Salary
        </h1>
        <button
          className="flex flex-row space-x-1 text-blue-600"
          onClick={handleReset}
        >
          <FaArrowRotateLeft className="mt-1 text-xs" />
          <span className="text-sm font-semibold">Reset</span>
        </button>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-base font-semibold">
          Basic Salary
        </label>
        <input
          placeholder="Eg: 10,000"
          type="number"
          className="px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none"
          style={{ width: "356px" }}
          value={basicSalary || ""}
          onChange={handleBasicSalaryChange}
        />
      </div>
      <div>
        <div className="mb-6">
          <label className="block mb-1 text-base font-semibold">Earnings</label>
          <label className="block mb-2 text-xs" style={{ color: "#757575" }}>
            Allowance, Fixed Allowance, Bonus and etc.
          </label>
        </div>
        <div className="overflow-auto max-h-16 custom-scrollbar">
          {earnings.map((earning, index) => (
            <div key={index}>
              <RecordItem
                data={earning}
                onDelete={deleteEarning}
                index={index}
              />
            </div>
          ))}
        </div>
        <button
          className="flex flex-row pl-1 mt-6 mb-8 space-x-1 text-blue-600"
          onClick={() => {
            setType(Type.Earnings);
            setModalOpen(true);
          }}
        >
          <FaPlus className="mt-1 text-xs" />
          <span className="text-sm font-semibold">Add New Allowance</span>
        </button>
      </div>
      <hr />
      <div>
        <div className="mt-4 mb-4">
          <label className="block mb-1 text-base font-semibold">
            Deductions
          </label>
          <label className="block mb-2 text-xs" style={{ color: "#757575" }}>
            Salary Advances, Loan Deductions and all
          </label>
        </div>
        <div className="overflow-auto max-h-16 custom-scrollbar">
          {deductions.map((deduction, index) => (
            <div key={index}>
              <RecordItem
                data={deduction}
                onDelete={deleteDeduction}
                index={index}
              />
            </div>
          ))}
        </div>
        <button
          className="flex flex-row pl-1 mt-6 mb-8 space-x-1 text-blue-600"
          onClick={() => {
            setType(Type.Deductions);
            setModalOpen(true);
          }}
        >
          <FaPlus className="mt-1 text-xs" />
          <span className="text-sm font-semibold">Add New Deduction</span>
        </button>
      </div>
      <EarningModal
        isOpen={isModalOpen}
        type={type}
        onRequestClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default InputComponent;
