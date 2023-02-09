import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  /* background-color: #ffcdd2; */
  overflow-y: auto;
`;

const TodoList = ({ todos, handleToggle, onChangeSelectedTodo, onRemove }) => {
  return (
    <TodoListBlock>
      <div>
        {todos.map((todo) => (
          <TodoItem
            handleToggle={handleToggle}
            onChangeSelectedTodo={onChangeSelectedTodo}
            todo={todo}
            onRemove={onRemove}
            key={todo.id}
          ></TodoItem>
        ))}
      </div>
    </TodoListBlock>
  );
};

export default TodoList;
