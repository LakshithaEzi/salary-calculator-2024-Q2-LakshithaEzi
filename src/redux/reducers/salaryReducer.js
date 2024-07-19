const initialState = {
  basicSalary: 0,
  earnings: [],
  deductions: [],
};

const salaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_BASIC_SALARY":
      return {
        ...state,
        basicSalary: action.payload,
      };
    case "ADD_EARNING":
      return {
        ...state,
        earnings: [...state.earnings, action.payload],
      };
    case "ADD_DEDUCTION":
      return {
        ...state,
        deductions: [...state.deductions, action.payload],
      };
    case "DELETE_EARNING":
      return {
        ...state,
        earnings: state.earnings.filter((_, index) => index !== action.payload),
      };
    case "DELETE_DEDUCTION":
      return {
        ...state,
        deductions: state.deductions.filter(
          (_, index) => index !== action.payload
        ),
      };
    case "EDIT_EARNING":
      return {
        ...state,
        earnings: state.earnings.map((earning, index) =>
          index === action.payload.index ? action.payload.newValue : earning
        ),
      };
    case "EDIT_DEDUCTION":
      return {
        ...state,
        deductions: state.deductions.map((deduction, index) =>
          index === action.payload.index ? action.payload.newValue : deduction
        ),
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default salaryReducer;
