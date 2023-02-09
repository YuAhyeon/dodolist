import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #d7ccc8;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>하이루</TodoTemplate>
    </>
  );
};

export default App;
