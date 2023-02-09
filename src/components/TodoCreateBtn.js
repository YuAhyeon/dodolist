import React from 'react';
import styled from 'styled-components';

const TodoCreateBtnBlock = styled.div`
  width: 50px;
  height: 80px;
  position: relative;
  bottom: 30px;
  left: 300px;

  .basicsDD {
    width: 50px;
    height: 50px;
    position: relative;
    margin: 0px auto;
    top: 40px;
  }

  .hoverDD {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 40px;
    right: 0;
  }

  .basicsDD:active {
    display: none;
  }
`;

const TodoCreateBtn = () => {
  return (
    <TodoCreateBtnBlock>
      <img className="hoverDD" alt="hoverDD" src="/images/hover_DODO.png" />
      <img className="basicsDD" alt="basicsDD" src="/images/basics_DODO.png" />
    </TodoCreateBtnBlock>
  );
};

export default TodoCreateBtn;
