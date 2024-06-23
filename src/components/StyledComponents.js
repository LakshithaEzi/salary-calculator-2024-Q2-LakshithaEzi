import styled from 'styled-components';

export const CounterWrapper = styled.div`
  text-align: center;
`;

export const CountDisplay = styled.h1`
  font-size: 4rem;
  color: #4CAF50;
`;

export const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  background-color: #008CBA;
  color: white;
  border-radius: 5px;
  
  &:hover {
    background-color: #005f73;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
`;
