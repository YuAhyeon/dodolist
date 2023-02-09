import React from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`
  flex: 1;
  background-color: #ffcdd2;
  overflow-y: auto;
`;

const TodoList = () => {
  return <TodoListBlock>TodoList</TodoListBlock>;
};

export default TodoList;
