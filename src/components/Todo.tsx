import React, { FC } from 'react';
import styled from 'styled-components';
import { TTodo } from './Todos';

type TProps = {
  todo: TTodo;
};

export const Todo: FC<TProps> = ({ todo }) => {
  return <TodoText>{todo.text}</TodoText>;
};

const TodoText = styled.h3`
  color: white;
  font-size: 2rem;
`;
