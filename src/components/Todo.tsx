import React from 'react';
import styled from 'styled-components';

type TTodo = {
  text: string;
  id: number;
};

type TState = {
  todos: TTodo[];
};

type TAction =
  | {
      type: 'ADD';
      payload: TTodo;
    }
  | {
      type: 'DELETE';
      payload: number;
    }
  | {
      type: 'CLEAR';
    };

const todoReducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case 'ADD':
      return {
        todos: [...state.todos, action.payload],
      };
    case 'DELETE':
      return {
        todos: [...state.todos.filter((t) => t.id !== action.payload)],
      };
    case 'CLEAR':
      return {
        todos: [],
      };
    default:
      throw new Error('Action type not supported');
  }
};

export const Todo = () => {
  return <Container></Container>;
};

const Container = styled.div``;
