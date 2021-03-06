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
            <Button
              margin='0px 0px 0px 10px'
              size='LARGE'
              kind='ADD'
              type='submit'
            >
              Add
            </Button>
          </FormInputAndButton>
        </Form>
        {state.todos.length === 0 ? (
          <h1>Yo, add some todos</h1>
        ) : (
          state.todos.map((todo) => {
            return (
              <TodoContainer key={todo.id}>
                <Todo todo={todo} />
                <Button
                  size='MEDIUM'
                  kind='REMOVE'
                  onClick={() => removeTodo(todo.id)}
                >
                  X
                </Button>
              </TodoContainer>
            );
          })
        )}
        {state.todos.length > 0 && (
          <Button
            margin='20px 0px'
            size='LARGE'
            width='100%'
            kind='CLEAR'
            onClick={clearTodos}
          >
            Clear
          </Button>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 80vh;
  color: white;
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

type TButtonProps = {
  kind: 'REMOVE' | 'ADD' | 'CLEAR';
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  width?: string;
  margin?: string;
};

const Button = styled.button<TButtonProps>`
  padding: 0.7rem;
  font-size: ${({ size }) =>
    size === 'SMALL' ? '1rem' : size === 'MEDIUM' ? '1.5rem' : '2rem'};
  background: none;
  border: 1px solid white;
  color: white;
  margin: ${({ margin }) => margin || '0px'};
  transition: all 0.2s ease;
  width: ${({ width }) => width || 'auto'};
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    border: 1px solid ${({ kind }) => (kind === 'ADD' ? 'green' : 'red')};
  }
`;

const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
