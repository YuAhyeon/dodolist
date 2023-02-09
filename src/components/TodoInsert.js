import React from 'react';
import styled from 'styled-components';

const TodoInsertBlock = styled.div`
  position: absolute;
  top: 70%;
  left: 38px;
  .wrapForm {
    width: 300px;
    height: 100px;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }

  form {
    display: flex;
    justify-content: center;
    background: red;
    width: 300px;
  }
  input {
    border: 0;
    background-color: transparent;
    width: 200px;
    border: 3px solid #462216;
    border-radius: 10px;
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
`;

const TodoInsert = ({ handleToggle }) => {
  return (
    <TodoInsertBlock>
      <div className="background" onClick={handleToggle}>
        <div className="wrapForm">
          <form>
            <input placeholder="할 일을 적어보세요!"></input>
            <button type="submit">
              <div className="submitBtn">OK</div>
            </button>
          </form>
        </div>
      </div>
    </TodoInsertBlock>
  );
};

export default TodoInsert;
