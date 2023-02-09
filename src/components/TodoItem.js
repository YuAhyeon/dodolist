import React, { useState } from 'react';
import styled from 'styled-components';
import { HiTrash, HiOutlinePencil } from 'react-icons/hi';

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 10px 20px 10px;
  color: #1d1d1d;

  .checkBox {
    width: 40px;
    height: 32px;
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
    border: solid 2px #462216;
    font-size: 12px;
  }

  .true {
    text-decoration: line-through;
    text-decoration-color: #462216;
  }

  .icon {
    /* margin: 0px 4px 0px 2px; */
    margin: 3px 4px;
    color: #462216;
  }
`;

const TodoItem = ({ todo }) => {
  const [checked, setChecked] = useState(todo.checked);
  const { text } = todo;

  const handleCheckChange = () => {
    setChecked(!checked);
  };

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
      <div className={checked ? 'todoText true' : 'todoText'}>{text}</div>
      <HiOutlinePencil className="icon" size={28} />
      <HiTrash className="icon" size={28} />
    </TodoItemBlock>
  );
};

export default TodoItem;
