import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoTasksLeft from './components/TodoTasksLeft';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #d7ccc8;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoTasksLeft />
        <TodoList />
      </TodoTemplate>
    </>
  );
};

export default App;
