import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ConstInput = styled.input`
  width: 50px;
  font-size: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

const ButtonCount = styled.button`
  background-color: transparent;
`;

export default function CountItem({ count, setCount, onChange }) {

  return (
    <CountWrapper>
        <div>Количество</div>
        <div>
          <ButtonCount disabled={count <=1} onClick={() => setCount(count - 1)}>-</ButtonCount>
          <ConstInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange}/>
          <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
        </div>
        
    </CountWrapper>
  )
}
