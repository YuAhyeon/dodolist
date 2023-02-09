import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoTasksLeft from './components/TodoTasksLeft';
import TodoList from './components/TodoList';
import TodoCreateBtn from './components/TodoCreateBtn';
import TodoInsert from './components/TodoInsert';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');


  body {
    background-image: url("/images/해바라기(1).jpg") ;
    background-repeat: repeat;
    font-family: 'Gowun Dodum', sans-serif;
}

`;

let nextId = 4;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '장 보러 가기',
      checked: false,
    },
    {
      id: 2,
      text: '낮잠 자기',
      checked: false,
    },
    {
      id: 3,
      text: '밥 먹기',
      checked: false,
    },
  ]);

  const handleToggle = () => {
    if (selectedTodo) setSelectedTodo(null);
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

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    handleToggle();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoTasksLeft todos={todos} />
        <TodoList
          todos={todos}
          handleToggle={handleToggle}
          onRemove={onRemove}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
        <div className="footerBnt" onClick={handleToggle}>
          <TodoCreateBtn />
        </div>
        {insertToggle && (
          <TodoInsert
            onInsertTodo={onInsertTodo}
            handleToggle={handleToggle}
            selectedTodo={selectedTodo}
            onUpdate={onUpdate}
          />
        )}
      </TodoTemplate>
    </>
  );
};

export default App;
