import React from 'react';
import styled from 'styled-components';

const TodoCreateBlock = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  bottom: 30px;
  left: 300px;

  .basicsDD {
    width: 50px;
    height: 50px;
    position: relative;
    margin: 0px auto;
  }

  .hoverDD {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
  }

  .basicsDD:hover {
    display: none;
  }
`;

const TodoCreate = () => {
  return (
    <TodoCreateBlock>
      <img className="hoverDD" alt="hoverDD" src="/images/hover_DODO.png" />
      <img className="basicsDD" alt="basicsDD" src="/images/basics_DODO.png" />
    </TodoCreateBlock>
  );
};

export default TodoCreate;
