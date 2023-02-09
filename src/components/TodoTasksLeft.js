import React from 'react';
import styled from 'styled-components';

const TodoTasksLeftBlock = styled.div`
  margin: 20px 50px;
  padding: 3px;
  border-radius: 12px;
  border: solid 3px #462216;
  font-weight: bolder;
  font-size: 13px;
  background: #ffeee1;
  height: 40px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #462216;
`;

const TodoTasksLeft = ({ todos }) => {
  return (
    //개수 수정하기
    <TodoTasksLeftBlock className="tasks-left">
      To-do를 완료하여 두두를 잡아보세요!
    </TodoTasksLeftBlock>
  );
};

export default TodoTasksLeft;
