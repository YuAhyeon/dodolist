import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoTasksLeft from './components/TodoTasksLeft';
import TodoList from './components/TodoList';
import TodoCreateBtn from './components/TodoCreateBtn';
import TodoInsert from './components/TodoInsert';

const GlobalStyle = createGlobalStyle`
  body {
    background: #d7ccc8;
  }
`;

let nextId = 4;

const App = () => {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일 1',
      checked: true,
    },
    {
      id: 2,
      text: '할일 2',
      checked: false,
    },
    {
      id: 3,
      text: '할일 3',
      checked: true,
    },
  ]);

  const handleToggle = () => {
    setInsertToggle(!insertToggle);
  };

  const onInsertTodo = (text) => {
    if (text === '') {
      return alert('할 일을 입력해 주세요!');
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos([...todos, todo]);
      nextId++;
    }
  };

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoTasksLeft />
        <TodoList todos={todos} />
        <div onClick={handleToggle}>
          <TodoCreateBtn />
        </div>
        {insertToggle && (
          <TodoInsert onInsertTodo={onInsertTodo} handleToggle={handleToggle} />
        )}
      </TodoTemplate>
    </>
  );
};

export default App;
