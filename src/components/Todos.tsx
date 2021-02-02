import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Todo } from './Todo';

export type TTodo = {
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

export const Todos = () => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <Container>
      <form>
        <Label>Add Todo</Label>
        <Input type='text' />
      </form>
      {state.todos.length === 0 ? (
        <h1>Yo, add some todos</h1>
      ) : (
        state.todos.map((todo) => {
          return (
            <div key={todo.id}>
              <Todo todo={todo} />
            </div>
          );
        })
      )}
    </Container>
  );
};

const Container = styled.div``;

const Label = styled.label`
  font-size: 2rem;
`;
const Input = styled.input`
  padding: 0.5rem;
`;
