import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 380px;
  height: 650px;

  position: relative;
  margin: 0 auto;
  background: #ffefaf;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  margin-top: 140px;
  margin-bottom: 32px;
`;

const TodoTemplate = ({ children }) => {
  return (
    <>
      <TodoTemplateBlock>{children}</TodoTemplateBlock>
    </>
  );
};

export default TodoTemplate;
