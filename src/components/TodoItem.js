import React, { useState } from 'react';
import styled from 'styled-components';

const TodoItemBlock = styled.div`
  display: flex;
  margin: 10px 10px 20px 10px;
  color: #1d1d1d;

  .checkBox {
    width: 35px;
    height: 35px;
    margin: 0px 10px;
  }

  .doneTrue {
    width: 100%;
    height: 100%;
    margin-right: 10px;
  }

  .doneFalse {
    width: 90%;
    height: 90%;
    margin-right: 10px;
  }

  .todoText {
    display: flex;
    align-items: center;
    width: 80%;
    height: 35px;
    margin-right: 10px;
    padding-left: 20px;
    background-color: white;
    border-radius: 25px;
    border: solid 2px #373737;
  }
`;

const TodoItem = ({ todo }) => {
  const [checked, setChecked] = useState(todo.checked);

  const handleCheckChange = () => {
    setChecked(!checked);
  };

  const { text } = todo;
  return (
    <TodoItemBlock>
      <div className="checkBox">
        {checked ? (
          <img
            className="doneTrue"
            alt="doneTrue"
            src="/images/doneTrue.png"
            onClick={handleCheckChange}
          />
        ) : (
          <img
            className="doneFalse"
            alt="doneFalse"
            src="/images/basics_DODO.png"
            onClick={handleCheckChange}
          />
        )}
      </div>
      <div className="todoText">{text}</div>
    </TodoItemBlock>
  );
};

export default TodoItem;
