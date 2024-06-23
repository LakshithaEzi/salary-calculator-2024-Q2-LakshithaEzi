import React from "react";
import { render } from "@testing-library/react";
import ResultComponent, { getMonthlyTax } from "./ResultComponent";

describe("getMonthlyTax function", () => {
  it("calculates tax correctly for annual salary <= 1200000", () => {
    const salary = 100000;
    const expectedTax = 0;

    const calculatedTax = getMonthlyTax(salary);

    expect(calculatedTax).toBe(expectedTax);
  });

  it("calculates tax correctly for annual salary > 1200000 and <= 1700000", () => {
    const salary = 150000;
    const expectedTax = 3500;

    const calculatedTax = getMonthlyTax(salary);

    expect(calculatedTax).toBeCloseTo(expectedTax, 2);
  });

  it("calculates tax correctly for annual salary > 3700000", () => {
    const salary = 400000;
    const expectedTax = 70500;

    const calculatedTax = getMonthlyTax(salary);

    expect(calculatedTax).toBeCloseTo(expectedTax, 2);
  });
});