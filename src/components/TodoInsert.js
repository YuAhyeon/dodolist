import React, { useState } from 'react';
import styled from 'styled-components';
import { ImCancelCircle } from 'react-icons/im';

const TodoInsertBlock = styled.div`
  position: absolute;
  top: 68%;
  left: 38px;

  .cancell {
    color: #462216;
    font-weight: bold;
    position: absolute;
    top: 5px;
    left: 283px;
    font-size: 13px;
  }

  .wrapForm {
    width: 300px;
    height: 100px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 3px solid #462216;
  }

  form {
    display: flex;
    position: absolute;
    top: 35px;
    justify-content: center;
    width: 300px;
  }
  input {
    border: 0;
    background-color: transparent;
    width: 200px;
    border: 3px solid #462216;
    border-radius: 10px;
    margin-left: 5px;
    padding: 8px;
  }

  button {
    border: 0;
    background-color: transparent;
    margin-left: 8px;
  }
  .submitBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #ffefaf;
    border-radius: 25px;
    font-weight: bold;
    font-size: 15px;
    color: #1d1d1d;
    border: 2px solid #462216;
  }

  button:hover .submitBtn {
    border: 2px solid #ffefaf;
    color: #ffefaf;
    background: #462216;
  }
`;

const TodoInsert = ({ handleToggle, onInsertTodo }) => {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const HandleOnSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue('');
    handleToggle();
  };
  return (
    <TodoInsertBlock>
      <div className="cancell" onClick={handleToggle}>
        ✕
      </div>
      <div className="wrapForm">
        <form onSubmit={HandleOnSubmit}>
          <input
            placeholder="할 일을 적어보세요!"
            value={value}
            onChange={handleOnChange}
          ></input>
          <button type="submit">
            <div className="submitBtn">OK</div>
          </button>
        </form>
      </div>
    </TodoInsertBlock>
  );
};

export default TodoInsert;
