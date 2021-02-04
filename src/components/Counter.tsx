import React, { useState } from 'react';
import styled from 'styled-components';

export const Counter = () => {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((c) => c + 1);
  }
  function decreaseCount() {
    setCount((c) => Math.max(0, c - 1));
  }
  function clearCount() {
    setCount(0);
  }

  return (
    <CountContainer>
      <CountHeader>Count: {count}</CountHeader>
      <ButtonContainer>
        <CounterButton onClick={increaseCount}>+</CounterButton>
        <CounterButton onClick={decreaseCount}>-</CounterButton>
        <CounterButton onClick={clearCount}>Clear</CounterButton>
      </ButtonContainer>
    </CountContainer>
  );
};

const CountContainer = styled.div`
  display: grid;
  place-items: center;
  margin-top: 5rem;
  font-size: 1.75rem;
`;

const CountHeader = styled.h1`
  color: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const CounterButton = styled.button`
  background: none;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  margin: 2rem;
  font-size: 2rem;
  transition: all 0.2s ease;

  &:hover {
    background: #fff;
    color: #333;
    cursor: pointer;
    transform: scale(0.96);
  }
`;
