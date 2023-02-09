import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  /* background-color: #ffcdd2; */
  overflow-y: auto;
`;

const TodoList = ({ todos }) => {
  return (
    <TodoListBlock>
      <dib>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id}></TodoItem>
        ))}
      </dib>
    </TodoListBlock>
  );
};

export default TodoList;
