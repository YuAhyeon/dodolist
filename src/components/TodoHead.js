import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  background: #a76c41;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 1px solid #86532e;

  h1 {
    font-weight: bold;
    margin: 0;
    color: white;
    margin: 20px 0px 0px 20px;
  }

  .today {
    margin: 8px 0px 0px 20px;
    color: #462216;
    /* font-weight: bold; */
    font-size: 15px;
  }

  .explain {
    margin: 8px 0px 10px 20px;
    font-size: 12px;
    font-weight: bold;
    color: #ffefaf;
  }
`;

const TodoHead = () => {
  const week = new Array(
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일'
  );
  const getToday = new Date();
  const getYear = getToday.getFullYear();
  const getMonth = getToday.getMonth() + 1;
  const getDate = getToday.getDate();
  const getDay = getToday.getDay();

  return (
    <>
      <TodoHeadBlock>
        <h1>두두 List ✨</h1>
        <div className="today">{`${getYear}년 ${getMonth}월 ${getDate}일 ${week[getDay]}`}</div>
        <div className="explain">To-do를 완료하여 두두를 잡아보세요!</div>
      </TodoHeadBlock>
    </>
  );
};

export default TodoHead;
