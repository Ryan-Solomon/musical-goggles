import React, { FC } from 'react';
import styled from 'styled-components';
import { TTodo } from './Todos';

type TProps = {
  todo: TTodo;
};

export const Todo: FC<TProps> = ({ todo }) => {
  return <Container>{todo.text}</Container>;
};

const Container = styled.div``;
