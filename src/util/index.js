export const Type = {
  Earnings: "Earnings",
  Deductions: "Deductions",
};
export const isNumeric = (value) => {
  return /^-?\d+$/.test(value);
};
