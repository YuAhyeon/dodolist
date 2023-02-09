import React from 'react';
import styled from 'styled-components';

const TodoTasksLeftBlock = styled.div`
  margin: 20px 50px;
  padding: 3px;
  border-radius: 12px;
  border: solid 3px #373737;
  font-weight: bolder;
  font-size: 13px;
  background: #ffeee1;
  height: 40px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoTasksLeft = () => {
  return (
    //개수 수정하기
    <TodoTasksLeftBlock className="tasks-left">
      {`남은 할 일: 2개`}
    </TodoTasksLeftBlock>
  );
};

export default TodoTasksLeft;
