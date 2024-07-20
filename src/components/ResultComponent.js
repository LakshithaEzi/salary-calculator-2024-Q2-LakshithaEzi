import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const getMonthlyTax = (salary) => {
  const annualSalary = 12 * salary;
  let annualTax = 0;

  if (annualSalary <= 1200000) {
    annualTax = 0;
  } else if (annualSalary <= 1700000) {
    annualTax = (annualSalary - 1200000) * 0.06;
  } else if (annualSalary <= 2200000) {
    annualTax = 500000 * 0.06 + (annualSalary - 1700000) * 0.12;
  } else if (annualSalary <= 2700000) {
    annualTax = 500000 * (0.06 + 0.12) + (annualSalary - 2200000) * 0.18;
  } else if (annualSalary <= 3200000) {
    annualTax = 500000 * (0.06 + 0.12 + 0.18) + (annualSalary - 2700000) * 0.24;
  } else if (annualSalary <= 3700000) {
    annualTax =
      500000 * (0.06 + 0.12 + 0.18 + 0.24) + (annualSalary - 3200000) * 0.3;
  } else {
    annualTax =
      500000 * (0.06 + 0.12 + 0.18 + 0.24 + 0.3) +
      (annualSalary - 3700000) * 0.36;
  }

  return annualTax / 12;
};

const ResultComponent = () => {
  const { basicSalary, earnings, deductions } = useSelector(
    (state) => state.salary
  );

  const [salaryDetails, setSalaryDetails] = useState({
    totalEarnings: 0,
    totalEarningsForEPF: 0,
    grossDeduction: 0,
    grossEarnings: 0,
    grossSalaryForEPF: 0,
    employeeEPF: 0,
    employerEPF: 0,
    employerETF: 0,
    tax: 0,
    netSalary: 0,
    costToCompany: 0,
  });

  useEffect(() => {
    const totalEarnings =
      basicSalary + earnings.reduce((sum, earning) => sum + earning.amount, 0);
    const totalEarningsForEPF =
      basicSalary +
      earnings.reduce((sum, earning) => {
        if (earning.epf) {
          return sum + earning.amount;
        }
        return sum;
      }, 0);
    const grossDeduction = deductions.reduce(
      (sum, deduction) => sum + deduction.amount,
      0
    );
    const grossEarnings = totalEarnings - grossDeduction;
    const grossSalaryForEPF = totalEarningsForEPF - grossDeduction;
    const employeeEPF = grossSalaryForEPF * 0.08;
    const employerEPF = grossSalaryForEPF * 0.12;
    const employerETF = grossSalaryForEPF * 0.03;
    const tax = getMonthlyTax(grossEarnings);
    const netSalary = grossEarnings - employeeEPF - tax;
    const costToCompany = grossEarnings + employerEPF + employerETF;

    setSalaryDetails({
      totalEarnings,
      totalEarningsForEPF,
      grossDeduction,
      grossEarnings,
      grossSalaryForEPF,
      employeeEPF,
      employerEPF,
      employerETF,
      tax,
      netSalary,
      costToCompany,
    });
  }, [basicSalary, earnings, deductions]);

  return (
    <div
      className="p-6 text-base border-2 rounded-lg bg-[#794746]  "
      style={{ borderColor: "#E0E0E0", width: "500px" ,height:"616px " }}
    >
      <h1 className="mb-4 text-xl font-bold text-white">Your salary</h1>
      <div className="mb-4">
        <p className="mb-4 text-sm" style={{ color: "#B4B9C4" }}>
          <strong>Items</strong>
          <span className="float-right">
            <strong>Amount</strong>
          </span>
        </p>
        <p className="mb-2 text-white">
          Basic Salary
          <span className="float-right">
            {salaryDetails.totalEarnings.toFixed(2)}
          </span>
        </p>
        <p className="mb-2 text-white">
          Gross Earning
          <span className="float-right">
            {salaryDetails.grossEarnings.toFixed(2)}
          </span>
        </p>
        <p className="mb-2 text-white">
          Gross Deduction
          <span className="float-right">
            - {salaryDetails.grossDeduction.toFixed(2)}
          </span>
        </p>
        <p className="mb-2 text-white">
          Employee EPF (8%)
          <span className="float-right">
            - {salaryDetails.employeeEPF.toFixed(2)}
          </span>
        </p>
        <p className="mb-2 text-white">
          APIT
          <span className="float-right">- {salaryDetails.tax.toFixed(2)}</span>
        </p>
      </div>
      <p
        className="p-2 mb-6 font-bold text-white rounded"
        style={{ border: "1px solid #E0E0E0 " }}
      >
        Net Salary 
        <span className="float-right text-white ">
          {salaryDetails.netSalary.toFixed(2)}
        </span>
      </p>
      <div className="mb-4 text-white">
        <p className="mb-4 text-sm" style={{ color: "#B4B9C4" }}>
          <strong>Contribution from the Employer</strong>
        </p>
        <p className="mb-2 text-white">
          Employer EPF (12%)
          <span className="float-right">
            {salaryDetails.employerEPF.toFixed(2)}
          </span>
        </p>
        <p className="mb-6 text-white">
          Employer ETF (3%)
          <span className="float-right">
            {salaryDetails.employerETF.toFixed(2)}
          </span>
        </p>
        <p className="mb-2 text-white">
          CTC (Cost to Company)
          <span className="float-right">
            {salaryDetails.costToCompany.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResultComponent;
