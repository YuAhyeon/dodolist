import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoTasksLeft from './components/TodoTasksLeft';

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
      </TodoTemplate>
    </>
  );
};

export default App;
