import React, { FormEvent, useReducer, useState } from 'react';
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
  const [todoTextInput, setTodoTextInput] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch({
      type: 'ADD',
      payload: {
        text: todoTextInput,
        id: Math.random(),
      },
    });
    setTodoTextInput('');
  }

  function removeTodo(id: number) {
    dispatch({
      type: 'DELETE',
      payload: id,
    });
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Label>Add Todo</Label>
        <Input
          value={todoTextInput}
          onChange={(e) => setTodoTextInput(e.target.value)}
          type='text'
        />
        <Button type='submit'>Add</Button>
      </form>
      {state.todos.length === 0 ? (
        <h1>Yo, add some todos</h1>
      ) : (
        state.todos.map((todo) => {
          return (
            <div key={todo.id}>
              <Todo todo={todo} />
              <Button onClick={() => removeTodo(todo.id)}>X</Button>
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

const Button = styled.button`
  padding: 0.5rem;
`;
