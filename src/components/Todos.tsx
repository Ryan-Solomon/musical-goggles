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

  function clearTodos() {
    dispatch({
      type: 'CLEAR',
    });
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Label>Add Todo</Label>
          <FormInputAndButton>
            <Input
              placeholder='Something to do..'
              value={todoTextInput}
              onChange={(e) => setTodoTextInput(e.target.value)}
              type='text'
            />
            <Button type='submit'>Add</Button>
          </FormInputAndButton>
        </Form>
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
        {state.todos.length > 0 && <Button onClick={clearTodos}>Clear</Button>}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 80vh;
`;

const Content = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInputAndButton = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  text-align: center;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2rem;
`;
const Input = styled.input`
  padding: 0.7rem;
  font-size: 2rem;
`;

const Button = styled.button`
  padding: 0.7rem;
  font-size: 2rem;
  background: none;
  border: 1px solid white;
  color: white;
  margin-left: 2rem;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    border: 1px solid green;
  }
`;
