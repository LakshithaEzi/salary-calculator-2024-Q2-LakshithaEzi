const initialState = {
    basicSalary: 0,
    earnings: [],
    deductions: [],
  };
  
  const salaryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_BASIC_SALARY':
        return {
          ...state,
          basicSalary: action.payload,
        };
      case 'ADD_EARNING':
        return {
          ...state,
          earnings: [...state.earnings, action.payload],
        };
      case 'ADD_DEDUCTION':
        return {
          ...state,
          deductions: [...state.deductions, action.payload],
        };
      case 'DELETE_EARNING':
        return {
          ...state,
          earnings: state.earnings.filter((_, index) => index !== action.payload),
        };
      case 'DELETE_DEDUCTION':
        return {
          ...state,
          deductions: state.deductions.filter((_, index) => index !== action.payload),
        };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  };
  
  export default salaryReducer;
  