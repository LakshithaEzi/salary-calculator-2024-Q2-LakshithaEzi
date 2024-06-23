export const updateBasicSalary = (salary) => ({
    type: 'UPDATE_BASIC_SALARY',
    payload: salary,
  });
  
  export const addEarning = (earning) => ({
    type: 'ADD_EARNING',
    payload: earning,
  });
  
  export const addDeduction = (deduction) => ({
    type: 'ADD_DEDUCTION',
    payload: deduction,
  });
  
  export const deleteEarning = (index) => ({
    type: 'DELETE_EARNING',
    payload: index,
  });
  
  export const deleteDeduction = (index) => ({
    type: 'DELETE_DEDUCTION',
    payload: index,
  });
  
  export const reset = () => ({
    type: 'RESET',
  });
  